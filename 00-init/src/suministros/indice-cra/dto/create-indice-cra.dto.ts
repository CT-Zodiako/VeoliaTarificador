import { IsNumber, IsString } from "class-validator"

export class CreateIndiceCraDTO {

    @IsNumber()
    ANNO: number
    @IsNumber()
    MES: number
    @IsString()
    VALOR: string
    @IsNumber()
    PARA_INDICES20011: number
}
