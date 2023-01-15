import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionesSkillsComponent } from './acciones-skills/acciones-skills.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AgregarProyectoComponent } from './agregar-proyecto/agregar-proyecto.component';
import { AgregarSkillComponent } from './agregar-skill/agregar-skill.component';
import { DbUserComponent } from './db-user/db-user.component';
import { EducacionComponent } from './educacion/educacion.component';
import { Error404Component } from './error404/error404.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginGuardian } from './login/login-guardian';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // RUTA POR DEFECTO
  {path:'', redirectTo: 'login',pathMatch:'full'},
  // RESTO DE RUTAS
  {path:'inicio',component: InicioComponent, canActivate:[LoginGuardian]},
  {path:'proyectos',component: ProyectosComponent, canActivate:[LoginGuardian]},
  {path:'acerca-de',component: AcercaDeComponent, canActivate:[LoginGuardian]},
  {path:'login',component: LoginComponent},
  {path:'acciones-skills/:id', component: AccionesSkillsComponent, canActivate:[LoginGuardian]},
  {path:'agregar-proyecto', component: AgregarProyectoComponent, canActivate:[LoginGuardian]},
  {path:'agregar-skill', component: AgregarSkillComponent, canActivate:[LoginGuardian]},
  {path:'register', component: RegisterComponent},
  {path:'db-user', component: DbUserComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  // RUTA ERROR 404
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
