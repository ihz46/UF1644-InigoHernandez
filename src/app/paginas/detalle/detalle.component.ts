import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/model/libro';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  libro: Libro;
  id: number;

  constructor(private libroService: LibroService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.id = params.id

    )
  }// constructor()

  ngOnInit() {
    console.trace('ngOnInit()')
    this.obtenerDetalle(this.id);
  }// ngOnInit()

  obtenerDetalle(id: number) {
    console.trace('obtenerDetalle')
    this.libroService.obtenerDetalle(id).subscribe(
      data => {
        console.debug('Libro recibido %o', data);
        this.libro = data;
      });

  }
}
