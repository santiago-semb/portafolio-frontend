import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionesSkillsComponent } from './acciones-skills/acciones-skills.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  // RUTA POR DEFECTO
  {path:'', redirectTo: 'login',pathMatch:'full'},
  // RESTO DE RUTAS
  {path:'inicio',component: InicioComponent},
  {path:'proyectos',component: ProyectosComponent},
  {path:'acerca-de',component: AcercaDeComponent},
  {path:'login',component: LoginComponent},
  {path:'acciones-skills/:id', component: AccionesSkillsComponent},
  // RUTA ERROR 404
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
