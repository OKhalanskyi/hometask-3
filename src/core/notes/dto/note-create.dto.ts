import { randomUUID } from "crypto";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

export class NoteCreateDto{

  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  category:string;

  @IsNotEmpty()
  @IsString()
  content:string;

  @IsString()
  id:string = randomUUID();

  @IsBoolean()
  isArchive:boolean = false;

  @IsDate()
  createdAt:Date = new Date()
}
