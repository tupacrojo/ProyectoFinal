import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/Pedido.interface';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://my-json-server.typicode.com/tupacrojo/ProyectoFinal/pedidos';

  getListaPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url);
  }

  postPedido(ven: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.url, ven);
  }

  deletePedido(id: string | undefined): Observable<Pedido> {
    return this.http.delete<Pedido>(`${this.url}/${id}`);
  }

  putPedido(ped: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.url}/${ped.id}`, ped);
  }

  getPedidosEnEspera(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(
      `${this.url}?estado=En espera de confirmacion`
    );
  }
  getPedidosAceptados(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.url}?estado=Aceptado`);
  }

  actualizarCantidadProducto(
    pedidoId: number,
    productoId: number,
    nuevaCantidad: number
  ): Observable<any> {
    return this.http.patch(
      `${this.url}/pedidos/${pedidoId}/productos/${productoId}`,
      {
        cantidad: nuevaCantidad,
      }
    );
  }
}
