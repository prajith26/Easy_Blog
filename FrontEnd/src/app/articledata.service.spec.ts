import { TestBed } from '@angular/core/testing';

import { ArticledataService } from './articledata.service';

describe('ArticledataService', () => {
  let service: ArticledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticledataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
