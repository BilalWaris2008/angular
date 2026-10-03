import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMsg = '';

  constructor(private router: Router) { }

  login() {

    const storedUser = localStorage.getItem("users");

    if (storedUser) {

      const user = JSON.parse(storedUser);

      if (this.email === user.email && this.password === user.password) {

        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['/home']);

      } else {
        this.errorMsg = "Invalid Credentials";
      }
    }

    else {
      this.errorMsg = "User not found";
    }

  }
}
