import { Component, OnInit } from '@angular/core';
import { Dueño_proyecto } from '../model/Dueño_proyecto.model';
import { DueñoProyectoService } from '../service/dueño-proyecto.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  dueno:Dueño_proyecto = new Dueño_proyecto("","",0,"","")

  constructor(private dueñoProyectoService: DueñoProyectoService) {}

  ngOnInit(): void {
    this.dueñoProyectoService.getDueño().subscribe(data => {this.dueno = data});
  }

}
