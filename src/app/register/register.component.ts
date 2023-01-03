import { Component } from '@angular/core';
import { NuevoUsuario } from '../model/NuevoUsuario.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  nombrePersona = "";
  nombreUsuario = "";
  direccionEmail = "";
  contrasena = "";

  constructor(private authService: AuthService) { }

  public crearUsuario() {
    let nuevoUsuario = new NuevoUsuario();
    nuevoUsuario.nombre = this.nombrePersona;
    nuevoUsuario.nombreUsuario = this.nombreUsuario;
    nuevoUsuario.email = this.direccionEmail;
    nuevoUsuario.password = this.contrasena;
    this.authService.nuevoUsuario(nuevoUsuario).subscribe();
  }

}
