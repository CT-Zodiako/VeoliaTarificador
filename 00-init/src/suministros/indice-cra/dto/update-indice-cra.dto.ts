import { IsNumber, IsString } from "class-validator"

export class UpDateIndiceCraDTO {

    @IsNumber()
    ANNO: number
    @IsNumber()
    MES: number
    @IsString()
    VALOR: string
    @IsNumber()
    PARA_INDICES20011: number
}
