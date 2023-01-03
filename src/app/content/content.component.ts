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
      for(let i=0; i<10; i++){
        this.skills.push(data[i]);
      }
    });

  }

}
