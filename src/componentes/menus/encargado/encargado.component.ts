import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  NgxChartsModule,
  Color,
  LegendPosition,
  ScaleType,
} from '@swimlane/ngx-charts';
import { VentaService } from '../../../services/venta.service';
import { Venta } from '../../../interfaces/Venta.interface';

@Component({
  selector: 'app-encargado',
  standalone: true,
  imports: [RouterModule, NgxChartsModule],
  templateUrl: './encargado.component.html',
  styleUrl: './encargado.component.css',
})
export class EncargadoComponent implements OnInit {
  single: any[] = [];
  view: [number, number] = [700, 400];

  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [],
  };

  categoryColors: { [key: string]: string } = {
    'Ropa Casual': '#1f77b4',
    Accesorios: '#aec7e8',
    'Ropa Deportiva': '#ff7f0e',
    Abrigos: '#ffbb78',
    Calzado: '#2ca02c',
    'Ropa Interior': '#98df8a',
    Faldas: '#d62728',
    Pantalones: '#ff9896',
    'Ropa Formal': '#9467bd',
    Otros: '#c5b0d5',
  };

  constructor(private ventaService: VentaService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.ventaService.getListaVentas().subscribe((ventas: Venta[]) => {
      const productoVentas: {
        [key: string]: { cantidad: number; categoria: string };
      } = {};

      ventas.forEach((venta) => {
        venta.productos.forEach((producto) => {
          if (productoVentas[producto.nombre]) {
            productoVentas[producto.nombre].cantidad += producto.cantidad;
          } else {
            productoVentas[producto.nombre] = {
              cantidad: producto.cantidad,
              categoria: producto.categoria,
            };
          }
        });
      });

      this.single = Object.keys(productoVentas)
        .map((key) => ({
          name: key,
          value: productoVentas[key].cantidad,
          extra: { categoria: productoVentas[key].categoria },
        }))
        .sort((a, b) => b.value - a.value); // Ordenar de mayor a menor

      this.colorScheme.domain = this.single.map(
        (item) => this.categoryColors[item.extra.categoria] || '#c5b0d5'
      );
    });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
