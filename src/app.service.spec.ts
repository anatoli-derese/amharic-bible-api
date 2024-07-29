import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getBook', () => {
    it('should return a book', async () => {
      const result = await service.getBook('01');
      expect(result).toBeDefined();
      expect(result).toHaveProperty('chapters');
    });
  });

  describe('getChapter', () => {
    it('should return a chapter', async () => {
      const result = await service.getChapter('01', '1');
      expect(result).toBeDefined();
      expect(result).toHaveProperty('verses');
    });
  });

  describe('getVerse', () => {
    it('should return a verse', async () => {
      const result = await service.getVerse('01', '1', '1');
      expect(result).toBeDefined();
      expect(result).toHaveProperty('Verse');
    });
  });

  describe('getVerses', () => {
    it('should return a paragraph', async () => {
      const result = await service.getVerses('01', '1', '1-3');
      expect(result).toBeDefined();
      expect(result).toHaveProperty('Paragraph');
    });
  });
});