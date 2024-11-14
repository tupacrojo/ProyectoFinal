import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LogoComponent } from "../ui/logo/logo.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private logService: AuthService) {}

  ngOnInit() {
    if (this.logService.isAuthenticatedUser()) {
      this.logService.autoRedirect();
    }
  }

  fb = inject(FormBuilder);
  listaUsuarios: Usuario[] = [];

  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    contrasena: ['', [Validators.required]],
  });

  ingresarUsuarioYContrasena() {
    if (this.formulario.invalid) return;

    const { nombre, contrasena } = this.formulario.getRawValue();
    this.logService.login(nombre, contrasena);
  }
}
