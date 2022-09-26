import { randomUUID } from "crypto";
import { Equals, IsBoolean, IsDate, IsIn, IsInstance, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Category } from "../interfaces/note.interface";


export class NoteCreateDto{
  @IsNotEmpty()
  @IsString()
  name:string;

  @IsNotEmpty()
  @IsIn(["Task","Thought","Idea"])
  category:Category;

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
