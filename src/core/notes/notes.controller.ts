import { Controller, Post, Body, Get } from "@nestjs/common";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NotesService } from "./notes.service";
import { Note } from "./interfaces/note.interface";

@Controller('notes')
export class NotesController{
  constructor(private notesService:NotesService) {}
  @Post()
  create(@Body() noteCreateDto: NoteCreateDto){
    this.notesService.create(noteCreateDto)
  }

  @Get()
  findAll():Note[]{
    return this.notesService.findAll()
  }
}