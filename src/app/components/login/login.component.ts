import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Swal} from 'sweetalert2/dist/sweetalert2';
import { ModalSelectUserComponent } from '../modal-select-user/modal-select-user.component';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,ModalSelectUserComponent],
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

  selectUser(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

}
