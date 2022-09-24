import { Controller, Post, Body, Get, Delete, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NotesService } from "./notes.service";
import { Note } from "./interfaces/note.interface";
import { StatisticsInterface } from "./interfaces/statistics.interface";

@Controller('notes')
export class NotesController{
  constructor(private notesService:NotesService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createNote(@Body() noteCreateDto: NoteCreateDto){
    return this.notesService.create(noteCreateDto)
  }

  @Get()
  findAll():Note[]{
    return this.notesService.findAll()
  }

  @Get(':id')
  findNote(@Param('id') id:string):Note{
    return this.notesService.findOne(id)
  }

  @Delete(':id')
  deleteNote(@Param('id') id:string){
    return this.notesService.delete(id)
  }

  @Get('/statistics/sum')
  showStats():StatisticsInterface{
    return this.notesService.showStats()
  }
}