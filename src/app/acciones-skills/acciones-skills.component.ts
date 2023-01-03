import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Skills } from '../model/Skills.model';
import { SkillsService } from '../service/skills.service';

@Component({
  selector: 'app-acciones-skills',
  templateUrl: './acciones-skills.component.html',
  styleUrls: ['./acciones-skills.component.css']
})
export class AccionesSkillsComponent implements OnInit{
  skill = new Skills("","");

  constructor(private skillService: SkillsService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'].toString();
      this.skillService.getSkill(id).subscribe(data => {
        this.skill = data;
      });
    })
  }

  public eliminarSkill(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'].toString();
      this.skillService.eliminarSkill(id).subscribe();
      this.router.navigate(['inicio']);
    })
  }

}
