import { Component } from '@angular/core';
import { ListaProductosComponent } from "../../componentes/productos/lista-productos/lista-productos.component";

@Component({
  selector: 'app-lista-porductos-page',
  standalone: true,
  imports: [ListaProductosComponent],
  templateUrl: './lista-porductos-page.component.html',
  styleUrl: './lista-porductos-page.component.css'
})
export class ListaPorductosPageComponent {

}
