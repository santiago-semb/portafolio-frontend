import { Component, OnInit } from '@angular/core';
import { DueñoProyectoService } from '../service/dueño-proyecto.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:string;
  constructor(private dueñoProyectoService: DueñoProyectoService) { }

  ngOnInit(): void {
    this.dueñoProyectoService.getDueño().subscribe(data => {
      this.experiencia = data.experiencia;
    });
  }

}
