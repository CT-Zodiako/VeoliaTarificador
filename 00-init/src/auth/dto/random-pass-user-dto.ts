import { IsNumber } from "class-validator";

export class RandomPassUserDTO {
    @IsNumber()   
    sisuId: number;
}