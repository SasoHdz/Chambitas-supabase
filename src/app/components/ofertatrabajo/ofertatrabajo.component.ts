import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertatrabajo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ofertatrabajo.component.html',
  styleUrl: './ofertatrabajo.component.css'
})
export class OfertatrabajoComponent {
  oficios: [string] = ['Vacio'];

  registro: any = {
    nombreTrabajo: '',
    descripcionTrabajo: '',
    actividades: '',
    pago: null,
    oficios: '',
    tipoContrato: ''
  };

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
}
