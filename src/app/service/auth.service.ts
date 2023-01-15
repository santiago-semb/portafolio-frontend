import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/JwtDto.model';
import { LoginUsuario } from '../model/LoginUsuario.model';
import { NuevoUsuario } from '../model/NuevoUsuario.model';
import { Usuario } from '../model/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = "https://backend-portafolio-k7e9.onrender.com/auth";

  constructor(private httpClient: HttpClient) { }

  public nuevoUsuario(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + "/nuevo", nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + "/login", loginUsuario);
  }

  public getUsuarios(): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.authURL + "/usuarios");
  }

}
