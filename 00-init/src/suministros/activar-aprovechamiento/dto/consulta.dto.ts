import { IsNumber } from "class-validator";


export class consultaDTO{
    @IsNumber()
    APSID: number;
    @IsNumber()
    APROANNO : number;
    @IsNumber()
    APROMES: number;
}