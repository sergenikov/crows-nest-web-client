import { TestBed } from '@angular/core/testing';

import { BasicHTTPScannerService } from './basic-httpscanner.service';

describe('BasicHTTPScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicHTTPScannerService = TestBed.get(BasicHTTPScannerService);
    expect(service).toBeTruthy();
  });
});
