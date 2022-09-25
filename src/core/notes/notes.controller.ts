import { Controller, Post, Body, Get, Delete, Param, UsePipes, ValidationPipe, Patch } from "@nestjs/common";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NotesService } from "./notes.service";
import { Note } from "./interfaces/note.interface";
import { StatisticsInterface } from "./interfaces/statistics.interface";
import { NoteUpdateDto } from "./dto/note-update.dto";

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

  @Delete('delete/:id')
  deleteNote(@Param('id') id:string){
    return this.notesService.delete(id)
  }

  @Patch('edit/:id')
  editNote(@Param('id') id:string, @Body() noteUpdateDto:NoteUpdateDto){
    return this.notesService.editNote(noteUpdateDto, id)
  }

  @Patch('change-status/:id')
  changeStatus(@Param('id') id:string){
    return this.notesService.toggleArchiveStatus(id)
  }

  @Get('/statistics/summary')
  showStats():StatisticsInterface{
    return this.notesService.showStats()
  }
}