import { Module } from '@nestjs/common';
import { NotesModule } from "./core/notes/notes.module";

@Module({
  imports: [NotesModule]
})
export class AppModule {}
