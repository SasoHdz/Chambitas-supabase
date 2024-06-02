import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-ofertas',
  standalone: true,
  imports: [],
  templateUrl: './listado-ofertas.component.html',
  styleUrl: './listado-ofertas.component.css'
})
export class ListadoOfertasComponent {
  notificationCount: number = 0;

  jobs = [
    {
      title: 'Desarrollador Full Stack',
      description: 'Desarrollo de aplicaciones web utilizando tecnologías modernas como React y Node.js. Se requiere experiencia mínima de 3 años.'
    },
    {
      title: 'Diseñador UX/UI',
      description: 'Diseño de interfaces de usuario atractivas y funcionales. Conocimiento en herramientas de diseño como Figma o Sketch es un plus.'
    },
    {
      title: 'Analista de Datos',
      description: 'Análisis de grandes volúmenes de datos para extraer insights y apoyar en la toma de decisiones estratégicas. Experiencia en SQL y Python requerida.'
    },
    // ... Añade más trabajos si es necesario
  ];

  incrementNotifications() {
    this.notificationCount++;
  }
}
