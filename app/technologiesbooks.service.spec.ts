import { TestBed } from '@angular/core/testing';

import { TechnologiesbooksService } from './technologiesbooks.service';

describe('TechnologiesbooksService', () => {
  let service: TechnologiesbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologiesbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
