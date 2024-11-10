import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string  = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  postUsuario(usuario : Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  deletePersona (id: string | number | null | undefined) : Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
