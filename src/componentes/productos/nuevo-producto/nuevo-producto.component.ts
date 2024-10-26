import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../interfaces/Producto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.css'
})
export class NuevoProductoComponent {

  producto: Producto = {
    nombre: '',
    categoria: '',
  }

  productoSeleccionado: Producto | undefined;

  @Output()
  emitirProducto: EventEmitter<Producto> = new EventEmitter();

  addProducto(){
    this.emitirProducto.emit(this.producto);
  }

  seleccionarProducto(prod: Producto) :void{
    this.emitirProducto.emit(this.productoSeleccionado);
  }

}
