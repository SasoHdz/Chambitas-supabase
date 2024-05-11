import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email:string = '';
  pass:string = '';

  ciudades: any[] = [];
  oficios: any[] = [];


  authService = inject(AuthService);
  fb = inject(FormBuilder);

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]],
    apaterno: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]],
    amaterno: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-zA-Z ]+$/)]],
    oficio: ['', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(30)]],
    numTel: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    cp: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    municipio: ['', [Validators.required, Validators.minLength(5)]],
    ciudad: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).+$/)]]
  });


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

  ngOnInit() {
    this.loadCiudades();
    this.loadOficios();
  }

  async loadCiudades() {
    const result = await this.authService.getCiudades();
    if (!result.error) {
      this.ciudades = result.data;
    }
  }

  async loadOficios() {
    const result = await this.authService.getOficios();
    if (!result.error) {
      this.oficios = result.data;
    }
  }



}
