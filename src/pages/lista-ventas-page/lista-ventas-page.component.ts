import { Component } from '@angular/core';
import { ListaVentasComponent } from "../../componentes/ventas/lista-ventas/lista-ventas.component";

@Component({
  selector: 'app-lista-ventas-page',
  standalone: true,
  imports: [ListaVentasComponent],
  templateUrl: './lista-ventas-page.component.html',
  styleUrl: './lista-ventas-page.component.css'
})
export class ListaVentasPageComponent {

}
