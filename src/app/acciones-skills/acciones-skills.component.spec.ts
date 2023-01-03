import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesSkillsComponent } from './acciones-skills.component';

describe('AccionesSkillsComponent', () => {
  let component: AccionesSkillsComponent;
  let fixture: ComponentFixture<AccionesSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
