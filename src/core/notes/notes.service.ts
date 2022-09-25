import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {Note} from "./interfaces/note.interface";
import {StatisticsInterface} from "./interfaces/statistics.interface";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NoteUpdateDto } from "./dto/note-update.dto";

@Injectable()
export class NotesService{
  private notes:Note[] = []

  create(note:NoteCreateDto):Note{
    this.notes.push(note)
    return note
  }

  delete(id:string){
    let todo = this.findOne(id)
    if(todo){
      this.notes = this.notes.filter(item=>id!=item.id)
    }
  }

  findAll():Note[]{
    return this.notes
  }

  findOne(id:string):Note{
    let note = this.notes.find((note)=>note.id==id)
    if(note){
      return note
    }
    else throw new HttpException('no note with such ID', HttpStatus.NOT_FOUND)
  }

  editNote(note:NoteUpdateDto ,id){
    let todo = this.findOne(id)
    if(todo){
      todo.content = note.content
      return todo
    }
  }

  toggleArchiveStatus(id:string){
    let todo = this.findOne(id)
    if(todo){
      todo.isArchive = !todo.isArchive
      return todo
    }
  }

  showStats():StatisticsInterface{
    return {total:this.notes.length,
            active:this.notes.filter(each=>!each.isArchive).length,
            archive:this.notes.filter(each=>each.isArchive).length}
  }

}