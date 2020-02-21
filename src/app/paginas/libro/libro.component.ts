import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  libros: Array<Libro>;
  libro: Libro;

  constructor(private libroService: LibroService) {

    this.libros = new Array<Libro>();
    this.libro = new Libro();

  }

  ngOnInit() {
    console.trace('Obtener listado');
    this.obtenerListado();
  }


  obtenerListado() {
    console.trace('Obtener listado');
    this.libroService.obtenerLibros().subscribe(
      data => {

        this.libros = data;

      },
      error => {

      }
    );
  }

}
