import { Component, inject, OnInit } from '@angular/core';
import { VentaService } from '../../../services/venta.service';
import { ListaProductosComponent } from '../../productos/lista-productos/lista-productos.component';
import { Producto } from '../../../interfaces/Producto.interface';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { venta } from '../../../interfaces/Venta.interface';
import { FormBuilder} from '@angular/forms';

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

  venta: venta = {
    fecha: '', 
    total: 0,
    productos: []
  }

  mostrarFormulario: boolean = false;
  productoSeleccionado: any = null;
  producto: any = null;
  estadoCheckbox: boolean[] = [];

  pt = inject(ProductoService);
  vt = inject(VentaService);
  fb = inject(FormBuilder);

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

  seleccionarProducto(index: number, checkbox: HTMLInputElement){

    if(checkbox.checked){
      this.productoSeleccionado = {...this.listaProductos[index]};
      this.mostrarFormulario = true;

    }else{

      if(this.productoSeleccionado != null){
        this.listaProductosVenta = this.listaProductosVenta.filter(producto => producto.id !== this.productoSeleccionado.id);
      }

      this.mostrarFormulario = false;
      this.productoSeleccionado = null;
      this.estadoCheckbox[index] = false;
    }
  }

  verificarCantidad(): number {

    if(this.productoSeleccionado != null){
      return this.productoSeleccionado.cantidad;
    }
    return 0;
  }

  validarCantidad(cantidadInput: HTMLInputElement){

    const max = this.verificarCantidad();
    const valor = +cantidadInput.value;
    const min = 1;

    if(valor > max){
      cantidadInput.value = max.toString();
    }

    if(valor <= 0){
      cantidadInput.value = min.toString();
    }

  }

  validarCantidadInicial(id: number): number | null{

    const index = this.listaProductosVenta.findIndex(producto => producto.id = id);

    if(index == -1){
      return 1;
    }else{
      return this.listaProductosVenta[index].cantidad;
    }

  }

  eliminarDatoFormulario(){

    if(this.mostrarFormulario && this.productoSeleccionado != null){
      
      const index = this.listaProductos.findIndex(producto => producto.id === this.productoSeleccionado.id);
      
      if(this.listaProductosVenta.some(producto => producto.id === this.productoSeleccionado.id)){
        this.listaProductosVenta = this.listaProductosVenta.filter(producto => producto.id != this.productoSeleccionado.id )
      }

      this.estadoCheckbox[index] = false;
      this.mostrarFormulario = !this.mostrarFormulario;
    
    }
  }

  cargarArregloProductos(cantidad: number){
      
    if(this.productoSeleccionado != null){

      const index = this.listaProductosVenta.findIndex(producto => producto.id === this.productoSeleccionado.id)
      const indice = this.listaProductos.findIndex(producto => producto.id === this.productoSeleccionado.id);

      if(index == -1){
        this.productoSeleccionado.cantidad = cantidad;
        this.listaProductosVenta.push(this.productoSeleccionado);
      }else{
        this.listaProductosVenta[index].cantidad = cantidad;       
      }
      
      this.estadoCheckbox[indice] = true;
      this.mostrarFormulario = !this.mostrarFormulario;

   }

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

    if(this.listaProductosVenta.length != 0){

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
    }else{
      alert("No se ha cargado ningun producto a la venta");
    }
  }

}


