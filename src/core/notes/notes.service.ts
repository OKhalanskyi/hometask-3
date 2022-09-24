import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {Note} from "./interfaces/note.interface";
import {StatisticsInterface} from "./interfaces/statistics.interface";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NoteUpdateDto } from "./dto/note-update.dto";
import { randomUUID } from "crypto";

@Injectable()
export class NotesService{
  private notes:Note[] = []
  private stats:StatisticsInterface = {
    total:this.notes.length,
    active:this.notes.filter(each=>!each.isArchive).length,
    archive:this.notes.filter(each=>each.isArchive).length
  }

  create(note:NoteCreateDto){
    this.notes.push(note)
    note.id = randomUUID()
    note.createdAt = new Date()
    note.isArchive = false
    return note
  }

  delete(id:string){
    let todo = this.findOne(id)
    if(todo){
      this.notes = this.notes.filter(item=>id!=item.id)
    }
    else throw new HttpException('impossible to delete, no note with such ID', HttpStatus.NOT_FOUND)
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
  //fix func params : find by id-dto
  editNote(note:NoteUpdateDto){
    let todo = this.findOne(note.id)
    if(todo){
      todo.content = note.content
      return todo
    }
    return null
  }

  toggleArchiveStatus(id:string){
    let todo = this.findOne(id)
    if(todo){
      todo.isArchive = !todo.isArchive
      return todo
    }
    return null
  }

  showStats():StatisticsInterface{
    return this.stats
  }

}