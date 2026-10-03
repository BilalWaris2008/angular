import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {Header} from './header/header';
// import {Home} from './home/home';
// import { Footer } from './footer/footer';
// import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
