import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Skills } from '../model/Skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = "https://backend-portafolio-k7e9.onrender.com/skills/";

  constructor(private httpClient: HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getSkillS(): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + "traer");
  }

  public getSkill(id:number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + "traer/" + id);
  }

  public eliminarSkill(id:number): Observable<Skills> {
    return this.httpClient.delete<Skills>(this.URL + "eliminar/" + id);
  }

  public crearSkill(skill:Skills): Observable<Skills> {
    return this.httpClient.post<Skills>(this.URL + "crear", skill);
  }

  /*public actualizarSkill(id:number, nombre:string, img:string): Observable<Skills> {
    return this.httpClient.put<Skills>(this.URL + "actualizar/" + id);
  }*/

}
