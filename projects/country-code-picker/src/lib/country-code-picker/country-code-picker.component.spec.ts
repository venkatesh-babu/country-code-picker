import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCodePickerComponent } from './country-code-picker.component';

describe('CountryCodePickerComponent', () => {
  let component: CountryCodePickerComponent;
  let fixture: ComponentFixture<CountryCodePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryCodePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryCodePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
