import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './nuevo-producto.component.html',
  styleUrl: './nuevo-producto.component.css',
})
export class NuevoProductoComponent implements OnInit {
  constructor(private productosService: ProductoService) {}

  fb = inject(FormBuilder);
  listaProductos: Producto[] = [];
  listaCategorias: string[] = [];

  ngOnInit(): void {
    this.getLista();
  }

  formulario = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    precio: [null, [Validators.required]],
    cantidad: [null, [Validators.required]],
    categoria: ['', [Validators.required]],
    diferencia: [0, [Validators.required]],
  });

  addProducto() {
    if (this.formulario.invalid) return;

    const prod = this.formulario.getRawValue();

    if (!this.validarNombreProducto(this.formulario.controls['nombre'].value)) {
      this.agregarLista(prod);

      this.formulario.reset({
        nombre: '',
        precio: null,
        cantidad: null,
        categoria: '',
        diferencia: 0,
      });
    } else {
      alert('Nombre existente');
    }

    return false;
  }

  agregarLista(prod: Producto) {
    this.productosService.postProductos(prod).subscribe({
      next: () => {
        alert('Producto agregado exitosamente');
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  getLista() {
    this.productosService.getProductos().subscribe({
      next: (prod) => {
        this.listaProductos = prod;
        this.cargarCategorias();
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }

  validarNombreProducto(nombre: string) {
    return this.listaProductos.find((prod) => prod.nombre === nombre);
  }

  cargarCategorias() {
    this.listaCategorias = Array.from([
      ...new Set(this.listaProductos.map((prod) => prod.categoria)),
    ]);
  }

  buscarCategoria(categoria: string) {
    return this.listaCategorias.some((cate) => (cate = categoria));
  }

  cargarDatoCaregorias(categoria: string) {
    if (this.buscarCategoria(categoria)) {
      this.listaCategorias.push(categoria);
      this.habilitarCategoria();
      alert('Se agrego correctamente');
    } else {
      alert('La categoria ya existe dentro de la base de datos');
    }
  }

  deshabilitarCategoria() {
    this.formulario.get('categoria')?.disable();
  }

  habilitarCategoria() {
    this.formulario.get('categoria')?.enable();
  }

  estadoCategoria() {
    return this.formulario.get('categoria')?.disabled;
  }
}
