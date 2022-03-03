import { IsNumber, IsString } from "class-validator";

export class AddRoleDto{
    @IsString({message: 'string'})
    readonly value: string;
    @IsNumber({},{message: 'number'})
    readonly userId: number;
}