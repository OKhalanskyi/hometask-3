import { Module } from "@nestjs/common";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";

@Module({
  imports:[],
  controllers:[NotesController],
  providers:[NotesService],
  exports:[NotesService]
})
export class NotesModule {}