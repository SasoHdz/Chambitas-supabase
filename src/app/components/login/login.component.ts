import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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

  OnSubmit(){
    console.log(this.email, this.pass);

    this.authService.signUp(this.email, this.pass)
      .then((resp: any) => {
        console.log(resp);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

}
