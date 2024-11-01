import { Component, inject, OnInit } from '@angular/core';
import { VentaService } from '../../../services/venta.service';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { venta } from '../../../interfaces/Venta.interface';

@Component({
  selector: 'app-nueva-venta',
  standalone: true,
  imports: [ListaProductosComponent,CommonModule],
  templateUrl: './nueva-venta.component.html',
  styleUrl: './nueva-venta.component.css'
})
export class NuevaVentaComponent implements OnInit
{
  ngOnInit(): void {
    this.getListaProductos();
  }

  listaProductos: Producto[] = [];
  listaProductosVenta: Producto[] = [];

  producto: Producto = {
    id: undefined,
    nombre: '',
    precio: null,
    categoria: '',
    cantidad:null
  };

  venta: venta = {
    fecha: '', 
    total: 0,
    productos: []
  }

  estadosInput: { [key: number]: boolean } = {};

  pt = inject(ProductoService);
  vt = inject(VentaService);

  getListaProductos(){
    this.pt.getProductos().subscribe({
      next:(prod) => {
        this.listaProductos = prod;
      },
      error: (err) => {
        console.log("Error",err);
      }
    })

  }

  cambiarEstadoInput(index: number) {
    this.estadosInput[index] = !this.estadosInput[index];
  }

  verificarCantidad(cantidad: number, index: number, cantidadInput: HTMLInputElement) {

    console.log("verificando cantidad: ", cantidad);

    if (cantidadInput.value === null || cantidad <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      cantidadInput.value = ''; 
      return;
  }

    if (this.listaProductos[index].cantidad === null || this.listaProductos[index].cantidad <= cantidad) {
        alert("Cantidad insuficiente en el stock");
        cantidadInput.value = '';
    }

  }

  cargarArregloProductos(cantidad: number,index: number){

      console.log("Cargando cantidad: ",cantidad);

      if (isNaN(cantidad)) {
        alert("El campo está vacío o tiene un valor no numérico.");
      return;
      }
    
      this.producto = {...this.listaProductos[index]};
      this.producto.cantidad = cantidad;
      this.listaProductosVenta.push(this.producto)
      this.cambiarEstadoInput(index);

      if(this.listaProductos[index].cantidad != null){
        this.listaProductos[index].cantidad = this.listaProductos[index].cantidad - cantidad;
      }

      console.log(this.listaProductosVenta);

  }

  obtenerFechaActual(): string {
    const fechaActual: Date = new Date();

    const dia: string = String(fechaActual.getDate()).padStart(2, '0');
    const mes: string = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const anio: number = fechaActual.getFullYear();

    return `${dia}/${mes}/${anio}`;
}

  calcularTotalVenta(): number{
    return this.listaProductosVenta.reduce((total, producto) => {

      const cantidad = producto.cantidad ?? 0;
      const precio = producto.precio ?? 0;
      return total + (precio * cantidad );
    }, 0);
  }

  cargarVenta(){

    this.venta.fecha = this.obtenerFechaActual();
    this.venta.total = this.calcularTotalVenta();
    this.venta.productos = [...this.listaProductosVenta];

    this.vt.postVenta(this.venta).subscribe({
      next: () => {
        alert("Se ingreso correctamente");
      },
      error: (err) => {
        console.log("Error",err);
      }
      
    })
  }

}


