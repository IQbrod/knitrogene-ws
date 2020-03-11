import { IsNotEmpty } from "class-validator";

export class MaterialDto {
    @IsNotEmpty()
    name: string;
}