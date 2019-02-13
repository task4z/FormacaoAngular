import { TestBed } from '@angular/core/testing';

import { TesteServiceService } from './teste-service.service';

describe('TesteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesteServiceService = TestBed.get(TesteServiceService);
    expect(service).toBeTruthy();
  });
});
