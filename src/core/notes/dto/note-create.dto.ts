import { randomUUID } from "crypto";
import { IsNotEmpty } from "class-validator";

export class NoteCreateDto{
  id:string;

  @IsNotEmpty()
  name:string;

  createdAt:Date;

  @IsNotEmpty()
  category:string;

  content:string;

  isArchive:boolean;
}
