import { TestBed } from '@angular/core/testing';

import { GoogleBooksFetcherService } from './google-books-fetcher.service';

describe('GoogleBooksFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleBooksFetcherService = TestBed.get(GoogleBooksFetcherService);
    expect(service).toBeTruthy();
  });
});
