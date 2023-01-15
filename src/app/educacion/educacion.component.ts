import { Component, OnInit } from '@angular/core';
import { DueñoProyectoService } from '../service/dueño-proyecto.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:string;
  constructor(private dueñoProyectoService: DueñoProyectoService) { }

  ngOnInit(): void {
    this.dueñoProyectoService.getDueño().subscribe(data => {
      this.educacion = data.educacion;
    });
  }

}
