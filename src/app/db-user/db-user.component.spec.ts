import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbUserComponent } from './db-user.component';

describe('DbUserComponent', () => {
  let component: DbUserComponent;
  let fixture: ComponentFixture<DbUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
