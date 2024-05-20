// Ejemplo de una interfaz para un modelo de usuario
export interface Usuario {
  nombre: string;
  apaterno: string;
  amaterno: string;
  estado?: number; // La propiedad es opcional
  municipio?: number; // La propiedad es opcional
  telefono: string;
  fechaNac: string;
  descripcion?: string;
  tipoUsuario: number;
  cp: string;
  usuario: string;
}
