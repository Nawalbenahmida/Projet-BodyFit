import { TestBed } from '@angular/core/testing';

import { MockCategorieService } from './mock-categorie.service';

describe('MockCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockCategorieService = TestBed.get(MockCategorieService);
    expect(service).toBeTruthy();
  });
});
