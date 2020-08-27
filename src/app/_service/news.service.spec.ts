import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';

describe('Nome do serviço', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('O que estou testando', () => {
    
    const service: NewsService = TestBed.get(NewsService);
    
    expect(service).toBeTruthy();
  });
});
