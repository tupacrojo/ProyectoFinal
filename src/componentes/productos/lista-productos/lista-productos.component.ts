import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service'; 
import { NuevoProductoComponent } from '../nuevo-producto/nuevo-producto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [NuevoProductoComponent,CommonModule],
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

  agregarLista(prod: Producto){
    this.productosService.postProductos(prod).subscribe(
      {
        next:() => {
          this.mostrarLista();
        },
        error: (err) => {
          console.log("Error",err);
        }
      }
    )
  }

  


}
