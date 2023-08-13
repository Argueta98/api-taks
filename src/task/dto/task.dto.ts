import { IsNotEmpty, IsString,IsBoolean, MinLength, MaxLength} from "class-validator";

export class TaskDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(200)
    readonly description:string;
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone:boolean;
}