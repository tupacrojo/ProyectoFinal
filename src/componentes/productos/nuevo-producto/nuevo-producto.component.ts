import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class NuevoProductoComponent implements OnInit{

  constructor(private productosService: ProductoService) { }

  fb = inject(FormBuilder);
  listaProductos: Producto[] = [];
  categorias: string[] = [];

  ngOnInit(): void {
    this.getLista();
  }

  formulario = this.fb.nonNullable.group(
    {
      nombre: ['',[Validators.required]],
      precio: [0,[Validators.required]],
      cantidad: [0,[Validators.required]],
      categoria: ['',[Validators.required]]
    }
  );

  addProducto(){

    if(this.formulario.invalid) return;

    const prod = this.formulario.getRawValue();
    console.log(prod);

    if(!this.validarNombreProducto(this.formulario.controls['nombre'].value)){
      
      this.agregarLista(prod);
      
      this.formulario.reset(
        {
        nombre: '',
        precio: 0,
        cantidad: 0,
        categoria: ''
        }
      ) 
    }else{
      alert("Nombre existente");
    }

   return false;
  }

  agregarLista(prod: Producto){

    this.productosService.postProductos(prod).subscribe(
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

  // cargarCategorias(){

  //   this.categorias = this.listaProductos.filter((a,b) => a.categoria !== b.categoria);

  // }

  getLista(){
     this.productosService.getProductos().subscribe(
      {
        next:(prod) => {
          this.listaProductos = prod;
        },
        error:(err) => {
          console.log("Error",err);
        }
      }
    )
  }

  validarNombreProducto(nombre: string){

    return this.listaProductos.find(prod => prod.nombre === nombre);
    
  }



}
