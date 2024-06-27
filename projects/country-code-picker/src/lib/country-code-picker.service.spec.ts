import { TestBed } from '@angular/core/testing';

import { CountryCodePickerService } from './country-code-picker.service';

describe('CountryCodePickerService', () => {
  let service: CountryCodePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryCodePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
