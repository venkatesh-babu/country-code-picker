# country-code-picker

A library for Country code picker field

## Live example

<img src="src/assets/sample.gif" alt="Live example"> </a>

## Getting started

### Step 1: Install `angular material`:

##### NPM

```shell
ng add @angular/material
```

### Step 2: Install `country-code-picker`:

##### NPM

```shell
npm install country-code-picker
```

### Step 3: Import the CountryCodePickerComponent

**`popup.component.ts`**

```typescript
import { CountryCodePickerComponent } from "country-code-picker";

@Component({
  selector: "app-popup",
  standalone: true,
  imports: [RouterOutlet, CountryCodePickerComponent],
  templateUrl: "./popup.component.html",
  styleUrl: "./popup.component.scss",
})
export class AppComponent {
  actionSelectEvent(event: Event) {
    console.log(event);
  }
}
```

### Step 4: implement in html

**`popup.component.html`**

```html
<country-code-picker displayValue="dial_code" defaultValue="+91" (actionSelectEvent)="actionSelectEvent($event)"></country-code-picker>
```

## API

### Inputs

| Input        | Type   | Default   | values         | Required | Description                                         |
| ------------ | ------ | --------- | -------------- | -------- | --------------------------------------------------- |
| displayValue | string | dial_code | dial_code/code | no       | Text for display value that display in select field |
| defaultValue | string | +91       | +91/IN         | no       | default value to be selected                        |

### Outputs

| Output            | Description                                        |
| ----------------- | -------------------------------------------------- |
| actionSelectEvent | event will called when an country code is selected |
