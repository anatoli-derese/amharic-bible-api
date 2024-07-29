import { BadRequestException, Injectable, NotFoundException, Response } from '@nestjs/common';
import { readFile } from 'fs/promises';
import * as path from 'path';

@Injectable()
export class AppService {
  public verse = "Welcome to Amharic bible API!";

  constructor(){
    this.loadDictionary();
  }

  async loadDictionary (): Promise<string []> {
    try{
      const filePath: string = path.join(__dirname, '../resources/00.json');
      const data: string = await readFile(filePath, 'utf-8');
      const jsoned = JSON.parse(data);
      const temp  : string[]= []
      for (let key in jsoned){
        temp.push(
          `${key} : ${jsoned[key]}`
        )
      }
      temp.sort((a,b) => a.localeCompare(b));
      temp.unshift("Books of the Bible with their corresponding numbers");
      return temp;
      
    }catch(error){
      throw new NotFoundException ("Could not Get Dictionary")
    }
  }

  async loadBook(id: string): Promise<string> {
    let intId = parseInt(id);
    if (intId <= 9 && id[0]!= "0"){
      id = `0${id}`;
    }
    else if (intId > 9) {
      id = parseInt(id).toString();
    }
    try{
      const filePath: string = path.join(__dirname, `../resources/${id}.json`);
      const data: string = await readFile(filePath, 'utf-8');
      const jsoned :string = JSON.parse(data);
      return jsoned;
    }catch(error){
      throw new NotFoundException(`Book with id ${id} not found`);
    }
  } 

  getDictionary() {
    return this.loadDictionary();
  }

  getBook(id: string){
    return this.loadBook(id);
  }

  async getChapter(bookNumber: string , chapterNumber: string){
    var book: string ="";
    try{
      book = await this.loadBook(bookNumber)
    }catch (error){
      throw new NotFoundException(`Book with id ${bookNumber} not found`); 
    }
    if (parseInt(chapterNumber) <= book["chapters"].length && parseInt(chapterNumber) > 0){
      return book["chapters"][parseInt(chapterNumber) -1 ]
    }
    throw new NotFoundException(`Chapter number ${chapterNumber} not found` ); 
  }


  async getVerse(bookNumber: string, chapterNumber: string , verseNumber: string){
    let chapter = "";
    try{
      chapter = await this.getChapter(bookNumber, chapterNumber);
    } catch(error){
      throw new NotFoundException(error.message); 
    }
    const verses :[string]= chapter["verses"];
    const verseNumberInt = parseInt(verseNumber);

    if(verseNumberInt < verses.length && verseNumberInt >0){
      return {"Verse": verses[verseNumberInt - 1]}
    }
    throw new NotFoundException(`Verse number ${verseNumber} not found.`)

  }
  async getVerses(bookNumber: string, chapterNumber: string , verseNumber: string){
    let chapter = "";
    try{
      chapter = await this.getChapter(bookNumber, chapterNumber);
    } catch(error){
      throw new NotFoundException(error.message); 
    }
    var paragraph: string = " ";
    try{
      const verses :[string]= chapter["verses"];
      var start = parseInt(verseNumber.split("-")[0]) 
      var end = parseInt(verseNumber.split("-")[1])
      if(Number.isNaN(start) || Number.isNaN(end)){
        throw new BadRequestException("Invalid numbers !")
      }
      if (start <= 0 || start >= end || start >= verses.length ){
        throw new BadRequestException("Invalid numbers !")
      }
      start -=1
      end -=1
      while (start <= end && start < verses.length){
        paragraph += verses[start]
        paragraph +=" "
        start +=1
    }
    
    }catch(error){ 
      throw error;
    }
    if (paragraph === undefined || paragraph.trim() === ""){
      return new Error("Something went wrong")
    }
    return {"Paragraph": paragraph};

  }

  

}
