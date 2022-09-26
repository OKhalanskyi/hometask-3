import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {Note} from "./interfaces/note.interface";
import {StatisticsInterface} from "./interfaces/statistics.interface";
import { NoteCreateDto } from "./dto/note-create.dto";
import { NoteUpdateDto } from "./dto/note-update.dto";

@Injectable()
export class NotesService{
  private notes:Note[] = [
    {
    id:"1",name:"work",createdAt:new Date(),category:"Task",content:"asdasd",isArchive:false
    },
    {
      id:"2",name:"swim",createdAt:new Date(),category:"Thought",content:"asdasd",isArchive:false
    },
    {
      id:"3",name:"code",createdAt:new Date(),category:"Idea",content:"asdasd",isArchive:true
    },
    {
      id:"4",name:"run",createdAt:new Date(),category:"Task",content:"asdasd",isArchive:false
    },
    {
      id:"5",name:"sleep",createdAt:new Date(),category:"Thought",content:"asdasd",isArchive:true
    },
    {
      id:"6",name:"drink",createdAt:new Date(),category:"Idea",content:"asdasd",isArchive:false
    },
    {
      id:"7",name:"eat",createdAt:new Date(),category:"Task",content:"asdasd",isArchive:true
    }
  ]

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
            archive:this.notes.filter(each=>each.isArchive).length,
            taskTotal:this.notes.filter(each=>each.category=="Task").length,
            taskActive:this.notes.filter(each=>each.category=="Task"&&!each.isArchive).length,
            taskArchive:this.notes.filter(each=>each.category=="Task"&&each.isArchive).length,
            thoughtTotal:this.notes.filter(each=>each.category=="Thought").length,
            thoughtActive:this.notes.filter(each=>each.category=="Thought"&&!each.isArchive).length,
            thoughtArchive:this.notes.filter(each=>each.category=="Thought"&&each.isArchive).length,
            ideaTotal:this.notes.filter(each=>each.category=="Idea").length,
            ideaActive:this.notes.filter(each=>each.category=="Idea"&&!each.isArchive).length,
            ideaArchive:this.notes.filter(each=>each.category=="Idea"&&each.isArchive).length}
  }
}