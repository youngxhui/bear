import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IndexService } from './index.service';

describe('IndexService', () => {
  let service: IndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IndexService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
