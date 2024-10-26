import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from '../componentes/productos/lista-productos/lista-productos.component';
import { NuevoProductoComponent } from '../componentes/productos/nuevo-producto/nuevo-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ListaProductosComponent,NuevoProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ProyectoFinal';
}
