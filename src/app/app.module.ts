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
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';

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
    HtmlComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
