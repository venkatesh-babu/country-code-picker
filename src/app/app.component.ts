import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupComponent } from '../../projects/my-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'npm-test';
  actionSelectEvent(event: any) {
    console.log(event);
  }
}
