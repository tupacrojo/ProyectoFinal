import { Component } from '@angular/core';
import { AdministradorComponent } from "../../componentes/menus/administrador/administrador.component";

@Component({
  selector: 'app-menu-admin-page',
  standalone: true,
  imports: [AdministradorComponent],
  templateUrl: './menu-admin-page.component.html',
  styleUrl: './menu-admin-page.component.css'
})
export class MenuAdminPageComponent {

}
