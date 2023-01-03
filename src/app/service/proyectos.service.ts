import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Proyectos } from '../model/Proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = "http://localhost:8080/proyectos/";

  constructor(private httpClient: HttpClient) { }

  // OBSERVABLE: ANGULAR USA OBSERVABLE PARA LAS PETICIONES ASINCRONAS
  public getProyectos(): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + "traer");
  }

  public getProyecto(id:number): Observable<Proyectos> {
    return this.httpClient.get<Proyectos>(this.URL + "traer/" + id);
  }

  public eliminarProyecto(id:number) {
    return this.httpClient.delete(this.URL + "eliminar/" + id);
  }

  public crearPoyecto(proyecto: Proyectos): Observable<Proyectos> {
    return this.httpClient.post<Proyectos>(this.URL + "crear", proyecto);
  }

  /*public actualizarProyecto(id:number, nombre:string, lenguaje:string, link:string): Observable<Proyectos> {
    return this.httpClient.put<Proyectos>(this.URL + "actualizar/" + id);
  }*/
  
}
