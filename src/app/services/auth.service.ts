import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private s_client: SupabaseClient;

  constructor() {
    this.s_client = createClient(environment.apiUrl, environment.apiKey);

  }

  signUp(email: string, password: string){
    return this.s_client.auth.signUp({email, password});
  }

  signIn(email: string, password: string){
    return this.s_client.auth.signInWithPassword({email, password});
  }

  async getCiudades() {
    let { data, error  } = await this.s_client
      .from('CIUDADES')
      .select('nombre');

    if (error) {
      console.error('Error fetching cities', error);
      return { error };
    }

    return { data };
  }

  async getOficios() {
    let { data, error  } = await this.s_client
    .from('OFICIOS')
    .select('*');

    if (error) {
      console.error('Error fetching cities', error);
      return { error };
    }

    return { data };
  }




}
