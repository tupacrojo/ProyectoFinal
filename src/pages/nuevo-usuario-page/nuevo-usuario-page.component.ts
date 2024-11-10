import { Component } from '@angular/core';
import { NuevoUsuarioComponent } from "../../componentes/usuarios/nuevo-usuario/nuevo-usuario.component";

@Component({
  selector: 'app-nuevo-usuario-page',
  standalone: true,
  imports: [NuevoUsuarioComponent],
  templateUrl: './nuevo-usuario-page.component.html',
  styleUrl: './nuevo-usuario-page.component.css'
})
export class NuevoUsuarioPageComponent {

}
