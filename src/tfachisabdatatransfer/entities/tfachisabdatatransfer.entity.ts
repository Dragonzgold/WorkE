import { Type } from "class-transformer";
import { IsDate, IsString } from "class-validator";
import { Entity } from "typeorm";

export class Tfachisabdatatransfer {
    @IsString()
    select:string

    @IsDate()
    @Type(()=>Date)
    dateStart: Date

    @IsDate()
    @Type(()=>Date)
    dateEnd: Date
}