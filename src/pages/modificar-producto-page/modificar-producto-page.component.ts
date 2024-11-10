import { Component } from '@angular/core';
import { ModificarProductoComponent } from "../../componentes/productos/modificar-producto/modificar-producto.component";

@Component({
  selector: 'app-modificar-producto-page',
  standalone: true,
  imports: [ModificarProductoComponent],
  templateUrl: './modificar-producto-page.component.html',
  styleUrl: './modificar-producto-page.component.css'
})
export class ModificarProductoPageComponent {

}
