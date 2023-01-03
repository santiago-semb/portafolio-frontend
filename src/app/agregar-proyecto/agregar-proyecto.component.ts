import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../model/Proyectos.model';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  nombreProject:string = "";
  lenguajeProject:string = "";
  linkProject:string = "";

  constructor(private proyectoService: ProyectosService, private router:Router) { }

  ngOnInit(): void {
    
  }

  submit(){
    let project = new Proyectos(this.nombreProject,this.lenguajeProject,this.linkProject, null);
    this.proyectoService.crearPoyecto(project).subscribe();
    this.router.navigate(['proyectos']);
  }

}
