import { Routes } from '@angular/router';
import { CountryCodePickerComponent } from '../../projects/country-code-picker/src/public-api';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'field',
  },
  {
    path: 'field',
    component: CountryCodePickerComponent,
  },
];
