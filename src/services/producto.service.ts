import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  urlApi: string = 'http://localhost:3000/productos';
  
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlApi)
  }

  postProductos(prod:Producto): Observable<Producto>{
    return this.http.post<Producto>(this.urlApi,prod);
  }

  deleteProductos(id:number | undefined): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlApi}/${id}`)
  }

  getProductoById(id:number | null):Observable<Producto>{
    return this.http.get<Producto>(`${this.urlApi}/${id}`)
  }

  putProducto(id:number, prod:Producto):Observable<Producto>{
    return this.http.put<Producto>(`${this.urlApi}/${id}`,prod);
  }
  
}

