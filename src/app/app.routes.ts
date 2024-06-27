import { Routes } from '@angular/router';
import { PopupComponent } from '../../projects/my-library/src/public-api';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'field',
  },
  {
    path: 'field',
    component: PopupComponent,
  },
];
