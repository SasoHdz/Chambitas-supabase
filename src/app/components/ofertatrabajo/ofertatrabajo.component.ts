import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "../layout/layout.component";
import { FooterComponent } from "../../components/footer/footer.component";

import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-ofertatrabajo',
    standalone: true,
    templateUrl: './ofertatrabajo.component.html',
    styleUrl: './ofertatrabajo.component.css',
    imports: [FormsModule, CommonModule, LayoutComponent, FooterComponent]
})
export class OfertatrabajoComponent {
  oficios: any[] = [];

  registro:any = {
    nombreTrabajo: '',
    descripcionTrabajo: '',
    actividades: '',
    pago: null,
    oficios: '',
    tipoContrato: ''
  };

  authService = inject(AuthService);

  ngOnInit() {
    this.loadOficios();
  }


  onChangeOficio(event: any) {
    // const oficioSeleccionado = event?.target?.value;
    // if (oficioSeleccionado) {
    //   console.log('Oficio seleccionado:', oficioSeleccionado);
    //   this.oficios.push(oficioSeleccionado)
    //   // Puedes realizar cualquier lógica adicional aquí
    // } else {
    //   console.error('Error: No se pudo obtener el valor del select.');
    // }
    console.log(event)
  }

  submitForm() {
    // Aquí puedes manejar la lógica para enviar el formulario
    console.log('Formulario enviado:', this.registro);
  }

  async loadOficios() {
    const result = await this.authService.getOficios();
    if (!result.error) {
      this.oficios = result.data;
    }
    console.log(this.oficios)
  }

}
