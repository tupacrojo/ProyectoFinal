import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../interfaces/Usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent implements OnInit{

  ngOnInit(): void {
    this.getLista();
  }

  fb = inject(FormBuilder);
  ts = inject(UsuarioService);
  listaUsuarios : Usuario [] = [];

  formulario = this.fb.nonNullable.group({
    nombreUsuario : ['', Validators.required],
    contrasena: ['', Validators.required],
    tipoUsuario : ['', Validators.required]
  });

  addUsuario() {

    if(this.formulario.invalid) return;

    const usuario = this.formulario.getRawValue();

    if(!this.validarNombreUsuario(this.formulario.controls['nombreUsuario'].value)) {

      this.agregarLista(usuario);

      this.formulario.reset({
        nombreUsuario: '',
        contrasena: '',
        tipoUsuario: ''})

    } else {

      alert('El nombre de usuario ya existe. Por favor ingrese otro');
    }

    return false;

  }

  agregarLista(usuario : Usuario)
  {
    this.ts.postUsuario(usuario).subscribe({
      next: (usuario : Usuario) =>
      {
        alert('Usuario agregado correctamente');
      },
      error : (e : Error) =>{
        console.log(e.message);
      }
    })
  }

  validarNombreUsuario(nombreUsuario : string){
    return this.listaUsuarios.find((usuario) => usuario.nombreUsuario === nombreUsuario);
  }

  getLista() {
    this.ts.getUsuarios().subscribe({
      next : (usuarios : Usuario[] ) =>{
        this.listaUsuarios = usuarios;
      },
      error : (e : Error) => {
        console.log(e.message);
      }
    })
  }
}
