import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  pass: string = '';

  authService = inject(AuthService)
  router = inject(Router);

  onLogin() {
    this.authService.signIn(this.email, this.pass)
      .then((response) => {
        if (response.error) {
          alert(response.error.message);
        } else {
          console.log('Login successful!', response);
          this.router.navigate(['/registro']);  // Cambia '/home' por la ruta a la que deseas dirigir
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert( error.error_description || 'Failed to log in.');
      });
  }

}
