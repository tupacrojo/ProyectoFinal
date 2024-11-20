import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte } from '../interfaces/Reporte.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  urlApi: string =
    'https://my-json-server.typicode.com/tupacrojo/ProyectoFinal/reportes';

  constructor(private http: HttpClient) {}

  getListaReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.urlApi);
  }

  postReportes(rep: Reporte): Observable<Reporte> {
    return this.http.post<Reporte>(this.urlApi, rep);
  }
}
