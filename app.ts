import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { AuthComponent } from 'auth.component/auth.component.ts'

@Component({
  selector: 'my-app',
  templateUrl: './app.html',
})
export class App {
  heading: string;
  text: string;

  constructor() {
    this.heading = `Angular v${VERSION.full}`;
    this.text = "A neat desk is a sign of a cluttered desk drawer.";
  }
}

@NgModule({
  imports: [BrowserModule, AuthComponent ],
  declarations: [App],
  bootstrap: [App]
})
export class AppModule {
}
