import { ApiProperty } from "@nestjs/swagger";
import {Length, IsString, IsEmail} from "class-validator";


export class CreateUserDto {

@ApiProperty({example: 'ivanov@gmail.com', description: 'EMAIL пользователя'})
@IsString({message: 'string'})
@IsEmail({},{message:'wrong email'})
readonly email: string;

@ApiProperty({example: '1234567', description: 'Пароль пользователя'})
@IsString({message: 'string'})
@Length(4,16, {message:'4 or 16'})
readonly password : string;
}