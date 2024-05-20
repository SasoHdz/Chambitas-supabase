import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email:string = '';
  pass:string = '';
  estado:any = 0;
  mun:number = 0;


  ciudades: any[] = [];
  estados: any[] = [];
  municipios: any[] = [];


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
    estado: ['', Validators.required],
    fechaNac: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).+$/)]]
  });


  OnSubmit(){
    console.log("SUBMIT")
    console.log(this.form.value.email, this.form.value.password);

    this.authService.signUp(this.form.value.email, this.form.value.password)
      .then((resp: any) => {
        console.log(resp);

        if(resp.data.user != null){
          let newUser:Usuario = {
            nombre: this.form.value.nombre,
            apaterno: this.form.value.apaterno,
            amaterno: this.form.value.amaterno,
            descripcion: this.form.value.descripcion,
            estado: parseInt(this.form.value.estado),
            municipio: parseInt(this.form.value.municipio),
            cp: this.form.value.cp,
            telefono: this.form.value.numTel,
            usuario: resp.data.user.id,
            tipoUsuario: 1,
            fechaNac: this.form.value.fechaNac
          };

          this.authService.setUser(newUser).then(resp => console.log(resp));
        }
        else {
          alert("Error al registrarse");
        }

      })
      .catch((err)=>{
        console.log(err);
      })
  }

  ngOnInit() {
    this.loadEstados();
    this.loadOficios();
    this.loadCiudades();

  }

  async loadCiudades() {
    const result = await this.authService.getCiudades();
    if (!result.error) {
      this.ciudades = result.data;
    }
  }

  async loadEstados() {
    const result = await this.authService.getEstados();
    if (!result.error) {
      this.estados = result.data;
      console.log(this.estados)
    }
  }

  async loadOficios() {
    const result = await this.authService.getOficios();
    if (!result.error) {
      this.oficios = result.data;
    }
  }



  async loadMunicipio(est:number) {
    const result = await this.authService.getMunicipio(est);
    if (!result.error) {
      this.municipios = result.MUNICIPIOS;
      console.log(this.municipios)
    }
  }


  findMun(){
    console.log(this.form.value.estado)
    let estadoSelect: number= parseInt(this.form.value.estado);
    if(estadoSelect!=0){
      this.loadMunicipio(estadoSelect);
    }
  }


}
