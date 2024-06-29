import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryCodePickerComponent } from '../../projects/country-code-picker/src/lib/country-code-picker/country-code-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CountryCodePickerComponent],
})
export class AppComponent {
  actionSelectEvent($event: any) {
    throw new Error('Method not implemented.');
  }
  title = 'country-code-picker';
}
