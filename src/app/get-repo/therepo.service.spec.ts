import { TestBed } from '@angular/core/testing';

import { TherepoService } from './therepo.service';

describe('TherepoService', () => {
  let service: TherepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TherepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
