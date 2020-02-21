import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../model/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) {
    console.trace('Pokemon service constructor')
  }

  crearLibro(libro: Libro): Observable<Libro> {
    const url = 'http://localhost:3000/libro/';
    console.debug(url);
    return this.http.post<Libro>(url, libro);
  }

  obtenerLibros(): Observable<Libro[]> {
    const url = 'http://localhost:3000/libro/';
    console.debug(url);
    return this.http.get<Libro[]>(url);
  }

  obtenerDetalle(id: number): Observable<Libro> {
    const url = `http://localhost:3000/libro/${id}/`;
    console.debug(url);
    return this.http.get<Libro>(url);
  }
}
