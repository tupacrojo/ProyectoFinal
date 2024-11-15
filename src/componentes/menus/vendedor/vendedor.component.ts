import { Component } from '@angular/core';
import { NuevaVentaComponent } from "../../ventas/nueva-venta/nueva-venta.component";

@Component({
  selector: 'app-vendedor',
  standalone: true,
  imports: [NuevaVentaComponent],
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css',
})
export class VendedorComponent {}
