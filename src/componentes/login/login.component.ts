import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private logService: AuthService) {}

  fb = inject(FormBuilder);
  listaUsuarios: Usuario[] = [];

  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    contrasena: ['', [Validators.required]],
  });

  ingresarUsuarioYContrasena() {
    if (this.formulario.invalid) return;

    const { nombre, contrasena } = this.formulario.getRawValue();
    console.log('Nombre', nombre);
    console.log('Contrasena', contrasena);
    this.logService.login(nombre, contrasena);
  }
}
