import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service'; 
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [NuevoProductoComponent,CommonModule,RouterModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})

export class ListaProductosComponent implements OnInit {
  
  listaProductos: Producto[] = [];
  
  constructor(private productosService: ProductoService) { }

  ngOnInit(): void {
    this.mostrarLista();
  }

  mostrarLista(){
    this.productosService.getProductos().subscribe(
      {
        next: (prod) => {
          this.listaProductos = prod;
        },

        error: (err) => {
          console.log("Error",err);
        }
      }
    )
  }

  eliminarProducto(id:number | undefined){
    this.productosService.deleteProductos(id).subscribe(
      {
        next:(produc: Producto) => {
          this.listaProductos = this.listaProductos.filter(
            (producto) => producto.id !== id
          );
        },
        error:(err) => {
          console.log("Error", err);
        }
      }
    )
  }
}
