import { Component } from '@angular/core';
import { NuevaVentaComponent } from "../../componentes/ventas/nueva-venta/nueva-venta.component";

@Component({
  selector: 'app-nueva-venta-page',
  standalone: true,
  imports: [NuevaVentaComponent],
  templateUrl: './nueva-venta-page.component.html',
  styleUrl: './nueva-venta-page.component.css'
})
export class NuevaVentaPageComponent {

}
