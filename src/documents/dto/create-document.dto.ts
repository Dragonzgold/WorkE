import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateDocumentDto {
    @IsString()
    @IsNotEmpty()
    nameDocument:string;

    @IsString()
    @IsNotEmpty()
    typeDocument:string

    // @IsDate()
    // @IsNotEmpty()
    // dateDocument:Date
}
