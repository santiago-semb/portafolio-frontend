import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Skills } from '../model/Skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = "http://localhost:8080/skills/";

  constructor(private httpClient: HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getSkillS(): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + "traer");
  }

  public getSkill(id:number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + "traer/" + id);
  }

}
