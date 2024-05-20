import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario'; // Asegúrate de importar el modelo correctamente

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private s_client: SupabaseClient;

  constructor() {
    this.s_client = createClient(environment.apiUrl, environment.apiKey);
  }

  signUp(email: string, password: string) {
    return this.s_client.auth.signUp({ email, password });
  }

  signIn(email: string, password: string) {
    return this.s_client.auth.signInWithPassword({ email, password });
  }

  async getCiudades() {
    let { data, error } = await this.s_client.from('CIUDADES').select('nombre');

    if (error) {
      console.error('Error fetching cities', error);
      return { error };
    }

    return { data };
  }

  async getEstados() {
    let { data, error } = await this.s_client.from('ESTADOS').select('*');

    if (error) {
      console.error('Error fetching cities', error);
      return { error };
    }

    return { data };
  }

  async getOficios() {
    let { data, error } = await this.s_client.from('OFICIOS').select('*');

    if (error) {
      console.error('Error fetching cities', error);
      return { error };
    }

    return { data };
  }

  async getMunicipio(estado: number) {
    let { data: MUNICIPIOS, error } = await this.s_client
      .from('MUNICIPIOS')
      .select('*')

      // Filters
      .eq('estado', estado);

    if (error) {
      console.error('Error fetching cities', error);
      return { error };
    }

    return { MUNICIPIOS };
  }

  async setUser(user: Usuario) {
    const fechaActual = new Date().toISOString();  // Formato ISO 8601 compatible con SQL

    const { data, error } = await this.s_client
      .from('USUARIOS')
      .insert([
        {
          nombre: user.nombre,
          apaterno: user.apaterno,
          amaterno: user.amaterno,
          numeroTelefono: user.telefono,
          cp: user.cp,
          estado: user.estado,
          municipio: user.municipio,
          fechaNac: user.fechaNac,
          descripcion: user.descripcion ,
          tipoUsuario: user.tipoUsuario ,
          usuario: user.usuario,
          fechaReg: fechaActual
        },
      ])
      .select();

    if (error) {
      console.error('Error al insertar usuario', error);
      return { error };
    }

    return { data };
  }
}
