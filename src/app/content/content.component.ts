import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/Skills.model';
import { SkillsService } from '../service/skills.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  skills: Skills[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkillS().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todasLasSkills = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined){
          todasLasSkills.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todasLasSkills.length; i++){
        this.skills.push(data[i]);
      }
    });

  }

}
