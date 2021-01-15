import { TestBed } from '@angular/core/testing';

import { NoteItemService } from './note-item.service';

describe('NoteItemService', () => {
  let service: NoteItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
