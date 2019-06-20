import { TestBed } from '@angular/core/testing';

import { EzNumericboxService } from './ez-numericbox.service';

describe('EzNumericboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EzNumericboxService = TestBed.get(EzNumericboxService);
    expect(service).toBeTruthy();
  });
});
