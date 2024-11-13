import { Component } from '@angular/core';
import { VendedorComponent } from "../../componentes/menus/vendedor/vendedor.component";
import { NuevaVentaPageComponent } from "../nueva-venta-page/nueva-venta-page.component";
import { NuevaVentaComponent } from "../../componentes/ventas/nueva-venta/nueva-venta.component";
import { SideNavbarComponent } from "../../componentes/ui/side-navbar/side-navbar.component";
import { TablaComponent } from "../../componentes/ui/tabla/tabla.component";

@Component({
  selector: 'app-menu-vendedor-page',
  standalone: true,
  imports: [VendedorComponent, NuevaVentaPageComponent, NuevaVentaComponent, SideNavbarComponent, TablaComponent],
  templateUrl: './menu-vendedor-page.component.html',
  styleUrl: './menu-vendedor-page.component.css'
})
export class MenuVendedorPageComponent {

}
