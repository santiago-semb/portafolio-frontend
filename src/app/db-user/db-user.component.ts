import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-db-user',
  templateUrl: './db-user.component.html',
  styleUrls: ['./db-user.component.css']
})
export class DbUserComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUsuarios().subscribe(data => {
      // CREAR ARRAY Y RECORRERLO PARA SABER CUANTOS REGISTROS TIENE
      let todosLosUsuarios = [];
      for(let i=0; i<50; i++){
        if(data[i] != undefined){
          todosLosUsuarios.push(data[i]);
        }
      }
      // RECORRER EL ARRAY SABIENDO CUANTOS REGISTROS TIENE
      for(let i=0; i<todosLosUsuarios.length; i++){
        this.usuarios.push(data[i]);
        console.log(this.usuarios);
      }
    });
  }

}
