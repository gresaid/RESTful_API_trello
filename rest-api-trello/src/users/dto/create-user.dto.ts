import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

@ApiProperty({example: 'ivanov@gmail.com', description: 'EMAIL пользователя'})
readonly email: string;
@ApiProperty({example: '1234567', description: 'Пароль пользователя'})
readonly password : string;

}