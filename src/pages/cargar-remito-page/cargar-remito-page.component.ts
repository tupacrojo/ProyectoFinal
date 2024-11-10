import { Component } from '@angular/core';
import { CargarRemitoComponent } from "../../componentes/pedidos/cargar-remito/cargar-remito.component";

@Component({
  selector: 'app-cargar-remito-page',
  standalone: true,
  imports: [CargarRemitoComponent],
  templateUrl: './cargar-remito-page.component.html',
  styleUrl: './cargar-remito-page.component.css'
})
export class CargarRemitoPageComponent {

}
