import { TestBed } from '@angular/core/testing';

import { RootuserService } from './rootuser.service';

describe('RootuserService', () => {
  let service: RootuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
