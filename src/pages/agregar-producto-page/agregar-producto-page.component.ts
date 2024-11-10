import { Component } from '@angular/core';
import { NuevoProductoComponent } from "../../componentes/productos/nuevo-producto/nuevo-producto.component";

@Component({
  selector: 'app-agregar-producto-page',
  standalone: true,
  imports: [NuevoProductoComponent],
  templateUrl: './agregar-producto-page.component.html',
  styleUrl: './agregar-producto-page.component.css'
})
export class AgregarProductoPageComponent {

}
