import { Component,inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  constructor(private us: UsuarioService){}
  fb = inject(FormBuilder);
  listaUsuarios: Usuario[] = [];
  
  ngOnInit(): void {
    this.getLista();
  
  }


  formulario = this.fb.nonNullable.group(
    {
      nombre: ['',[Validators.required]],
      contrasena: ['',[Validators.required]],
    }
  );

  getLista(){
    this.us.getUsuarios().subscribe(
      {
        next: (usuario) => {
          this.listaUsuarios = usuario
          console.log(this.listaUsuarios);
        },
        error: (err) =>
          console.log("Error",err)
      }
    )
  }

  ingresarUsuarioYContrasena(){

    if(this.formulario.invalid) return;

    const {nombre, contrasena}  = this.formulario.getRawValue();

    if(this.validarUsuarioYContrasena(nombre,contrasena)){
      alert("Ingreso correctamente")
    }else{
      alert("Usuario o contrasena incorrectos");
    }
  
  }

  validarUsuarioYContrasena(nombre: string, contrasena: string): boolean {
    return this.listaUsuarios.some(
      usuario => usuario.nombreUsuario === nombre && usuario.contrasena === contrasena
    );
  }

}
