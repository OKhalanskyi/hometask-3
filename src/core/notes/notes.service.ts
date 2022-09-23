import { Injectable } from "@nestjs/common";
import {Note} from "./interfaces/note.interface";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NoteUpdateDto } from "./dto/note-update.dto";

@Injectable()
export class NotesService{
  private notes:Note[] = []

  create(note:NoteCreateDto){
    this.notes.push(note)
  }
  delete(id:number){
    this.notes.filter(item=>item.id!==id)
  }
  findAll():Note[]{
    return this.notes
  }
  findOne(id:number):Note{
    let note = this.notes.find((note)=>note.id===id)
    if(note){
      return note
    }
    return null
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
  toggleArchiveStatus(id:number){
    let todo = this.findOne(id)
    if(todo){
      todo.isArchive = !todo.isArchive
      return todo
    }
    return null
  }
  showStats(){
    let total = this.notes.length
    let active = this.notes.filter(todo=>!todo.isArchive).length
    let archive = this.notes.length - active
    return {totalNotes:total,activeNotes:active,archiveNotes:archive}
  }
}