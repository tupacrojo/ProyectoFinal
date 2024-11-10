import { Component } from '@angular/core';
import { ListaReportesComponent } from "../../componentes/reportes/lista-reportes/lista-reportes.component";

@Component({
  selector: 'app-lista-reportes-page',
  standalone: true,
  imports: [ListaReportesComponent],
  templateUrl: './lista-reportes-page.component.html',
  styleUrl: './lista-reportes-page.component.css'
})
export class ListaReportesPageComponent {

}
