import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.css'
})
export class NuevoProductoComponent {

  constructor(private productosService: ProductoService) { }

  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group(
    {
      nombre: [''],
      precio: [0],
      cantidad: [0],
      categoria: ['']
    }
  )


  productoSeleccionado: Producto | undefined;

  @Output()
  emitirProducto: EventEmitter<Producto> = new EventEmitter();

  addProducto(){

    if(this.formulario.invalid) return;

    const tarea = this.formulario.getRawValue();

    this.agregarLista(tarea);

    this.emitirProducto.emit(tarea);

  }

  agregarLista(tarea: Producto){

    this.productosService.postProductos(tarea).subscribe(
      {
        next:() => {
          alert("Producto agregado exitosamente");
        },
        error: (err) => {
          console.log("Error",err);
        }
      }
    )
  }

  seleccionarProducto(tarea: Producto) :void{
    this.emitirProducto.emit(this.productoSeleccionado);
  }

}
