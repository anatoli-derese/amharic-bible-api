import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('book')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDictionary() {
    return this.appService.getDictionary();
  }
  @Get(':id')
  getBook(@Param() params: any) {
    return this.appService.getBook(params.id);
  }
  @Get(':bookId/chapter/:id')
  getChapter(@Param() params:any){
    return this.appService.getChapter(params.bookId, params.id);
  }
  @Get(':bookId/chapter/:id/verse')
  getWholeChapter(@Param() params:any){
    return this.appService.getChapter(params.bookId, params.id);
  }
  @Get(':bookId/chapter/')
  getFullChapter(@Param() params:any){
    return this.appService.getBook(params.bookId);
  }
  @Get(':bookId/chapter/:chapterId/verse/:id')
  getVerse(@Param() params:any){
    return this.appService.getVerse(params.bookId, params.chapterId, params.id );
  }
  @Get(':bookId/chapter/:chapterId/verses/:id')
  getVerses(@Param() params:any){
    return this.appService.getVerses(params.bookId, params.chapterId, params.id );
  }

}
