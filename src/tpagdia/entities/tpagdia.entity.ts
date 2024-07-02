import { Type } from "class-transformer"
import { IsDate, IsString } from "class-validator"

export class Tpagdia {
    @IsString()
    select:string

    @IsDate()
    @Type(()=>Date)
    dateStart: Date

    @IsDate()
    @Type(()=>Date)
    dateEnd: Date
}
