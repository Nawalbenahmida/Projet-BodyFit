import { TestBed } from '@angular/core/testing';

import { InfoVideoService } from './info-video.service';

describe('InfoVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoVideoService = TestBed.get(InfoVideoService);
    expect(service).toBeTruthy();
  });
});
