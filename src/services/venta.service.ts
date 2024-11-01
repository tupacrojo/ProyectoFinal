import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { venta } from '../interfaces/Venta.interface';

@Injectable({
  providedIn: 'root'
})

export class VentaService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/ventas';

  getListaVentas(): Observable<venta[]>{
    return this.http.get<venta[]>(this.url);
  }
  
  postVenta(ven:venta):Observable<venta>{
    return this.http.post<venta>(this.url,ven)
  }

  
}
