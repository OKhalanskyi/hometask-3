import { IsNotEmpty, IsString } from "class-validator";

export class NoteUpdateDto{
  @IsNotEmpty()
  @IsString()
  content:string;
}
