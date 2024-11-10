import { Component } from '@angular/core';
import { ListaUsuarioComponent } from "../../componentes/usuarios/lista-usuario/lista-usuario.component";

@Component({
  selector: 'app-lista-usuario-page',
  standalone: true,
  imports: [ListaUsuarioComponent],
  templateUrl: './lista-usuario-page.component.html',
  styleUrl: './lista-usuario-page.component.css'
})
export class ListaUsuarioPageComponent {

}
