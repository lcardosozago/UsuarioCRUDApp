import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioService {
  readonly apiURL : string;

  constructor(private http: HttpClient) {
    this.apiURL = 'api/usuario';
  }

  public listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiURL}`);
  }

  public obter(id: number): Observable<Usuario | null> {
    return this.http.get<Usuario>(`${this.apiURL}/${id}`);
  }

  public criar(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.apiURL}`, usuario);
  }

  public editar(usuario: Usuario): Observable<any> {
    return this.http.put(`${this.apiURL}`, usuario);
  }

  public excluir(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
