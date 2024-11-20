import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../interfaces/Venta.interface';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://my-json-server.typicode.com/tupacrojo/ProyectoFinal/ventas';

  getListaVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.url);
  }

  postVenta(ven: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.url, ven);
  }
}
