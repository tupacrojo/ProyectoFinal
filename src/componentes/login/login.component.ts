import { Component,inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';
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

  constructor(private us: UsuarioService, private router: Router){}
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

    const usuario = this.validarUsuarioYContrasena(nombre,contrasena);

    if(usuario){

      alert("Ingreso correctamente");

      switch (usuario.tipoUsuario) {
        case 'administrador':
          this.router.navigate(['/MenuAdministrador']);
          break;
        case 'supervisor':
          this.router.navigate(['/MenuSupervisor']);
          break;
        case 'vendedor':
          this.router.navigate(['/MenuVendedor']);
          break;
        case 'encargado':
          this.router.navigate(['/MenuEncargado']);
          break;
        default:
          console.log('Tipo de usuario no reconocido');
      }

    } else {
      alert("Usuario o contrasena incorrectos");
    }
  
  }
  
  validarUsuarioYContrasena(nombre: string, contrasena: string): Usuario | undefined {
    return this.listaUsuarios.find(
      usuario => usuario.nombreUsuario === nombre && usuario.contrasena === contrasena
    );
  }

}
