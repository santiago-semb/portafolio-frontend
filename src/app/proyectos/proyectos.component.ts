import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { count } from 'rxjs';
import { Proyectos } from '../model/Proyectos.model';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];
  rellenos: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  constructor(private proyectosService:ProyectosService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todasLosProyectos = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined){
          todasLosProyectos.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todasLosProyectos.length; i++){
        this.proyectos.push(data[i]);
      }
    });
  }
  

  public eliminarProyecto(id:number){
      this.proyectosService.eliminarProyecto(id).subscribe();
      this.router.navigate(['inicio'])
  }

}
