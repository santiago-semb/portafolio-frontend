import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { Error404Component } from './error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { SubNavCrudComponent } from './sub-nav-crud/sub-nav-crud.component';
import { AccionesSkillsComponent } from './acciones-skills/acciones-skills.component';
import { AgregarProyectoComponent } from './agregar-proyecto/agregar-proyecto.component';
import { AgregarSkillComponent } from './agregar-skill/agregar-skill.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { DueñoProyectoService } from './service/dueño-proyecto.service';
import { ProyectosService } from './service/proyectos.service';
import { SkillsService } from './service/skills.service';
import { TokenService } from './service/token.service';
import { LoginGuardian } from './login/login-guardian';
import { DbUserComponent } from './db-user/db-user.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    InicioComponent,
    ProyectosComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SubNavComponent,
    Error404Component,
    ContentComponent,
    SubNavCrudComponent,
    AccionesSkillsComponent,
    AgregarProyectoComponent,
    AgregarSkillComponent,
    RegisterComponent,
    DbUserComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,DueñoProyectoService,ProyectosService,SkillsService,TokenService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
