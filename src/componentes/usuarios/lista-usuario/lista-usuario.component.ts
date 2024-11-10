import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/Usuario.interface';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent implements OnInit {

  ngOnInit(): void {
    this.listarUsuarios();
  }

  ts = inject(UsuarioService);

  listaUsuarios : Usuario [] = [];

  agregarUsuario (usuario : Usuario) {

    this.listaUsuarios.push({...usuario});
  }

  listarUsuarios()
  {
    this.ts.getUsuarios().subscribe({
      next: (usuarios : Usuario[]) => {
        this.listaUsuarios = usuarios;
      },
      error : (e : Error) => {
        console.log(e.message);
      }
    })
  }

  delete(id : string | number | null | undefined){

    this.ts.deletePersona(id).subscribe({
      next : () => {
        alert('Borrado correctamente');
        this.listarUsuarios();
      },
      error : (e : Error) => 
      {
        console.log(e.message);
      }
    })
  }

  
}
