import { Component } from '@angular/core';
import { Producto } from '../../../interfaces/Producto.interface';
import { Reporte } from '../../../interfaces/Reporte.interface';
import { ReporteService } from '../../../services/reporte.service';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-reportes',
  standalone: true,
  imports: [RouterModule,DatePipe],
  templateUrl: './lista-reportes.component.html',
  styleUrl: './lista-reportes.component.css',
})
export class ListaReportesComponent {
  reportes: Reporte[] = [];
  constructor(private reporteService: ReporteService) {}

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista() {
    this.reporteService.getListaReportes().subscribe({
      next: (rep) => {
        this.reportes = rep;
      },
    });
  }
}
