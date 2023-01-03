import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavCrudComponent } from './sub-nav-crud.component';

describe('SubNavCrudComponent', () => {
  let component: SubNavCrudComponent;
  let fixture: ComponentFixture<SubNavCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubNavCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNavCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
