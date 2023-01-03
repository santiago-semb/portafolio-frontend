import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../model/Skills.model';
import { SkillsService } from '../service/skills.service';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent {

  nombreSkill = "";
  imagenSkill = "";

  constructor(private skillService:SkillsService, private router:Router) { }

  submit(){
    let skill = new Skills(this.nombreSkill,this.imagenSkill);
    this.skillService.crearSkill(skill).subscribe();
    this.router.navigate(['inicio']);
  }

}
