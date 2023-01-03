import { Component, OnInit } from '@angular/core';
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

  constructor(private proyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.proyectosService.getProyectos().subscribe(data => {
      for(let i=0; i<3; i++){
        this.proyectos.push(data[i]);
      }
      console.log(this.proyectos)
    });
  }

}
