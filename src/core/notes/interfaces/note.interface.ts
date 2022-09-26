export interface Note{
  id:string;
  name:string;
  createdAt:Date;
  category:Category;
  content:string;
  isArchive:boolean;
}

export type Category = "Task"|"Thought"|"Idea"