import { Component } from '@angular/core';
import { NuevoReporteComponent } from "../../componentes/reportes/nuevo-reporte/nuevo-reporte.component";

@Component({
  selector: 'app-nuevo-reporte-page',
  standalone: true,
  imports: [NuevoReporteComponent],
  templateUrl: './nuevo-reporte-page.component.html',
  styleUrl: './nuevo-reporte-page.component.css'
})
export class NuevoReportePageComponent {

}
