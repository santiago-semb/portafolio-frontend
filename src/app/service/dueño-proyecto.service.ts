import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Dueño_proyecto } from '../model/Dueño_proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class DueñoProyectoService {

  URL = "http://localhost:8080/dueño/";

  constructor(private httpClient:HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getDueño(): Observable<Dueño_proyecto> {
    return this.httpClient.get<Dueño_proyecto>(this.URL + "traer/1");
  }

}
