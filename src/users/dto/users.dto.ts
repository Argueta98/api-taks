import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UsersDTO {
    @IsNotEmpty()
    @IsString()
    readonly FullName: string;
    @IsNotEmpty()
    @IsString()
    readonly UserName: string;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
    @IsNotEmpty()
    @IsBoolean()
    readonly UserType: boolean;
    @IsNotEmpty()
    @IsNumber()
    readonly Age: number;
    @IsNotEmpty()
    @IsBoolean()
    readonly isActive: boolean;
}