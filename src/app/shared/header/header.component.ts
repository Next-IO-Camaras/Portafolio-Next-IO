import { Component, OnInit } from '@angular/core';
import { InfoPaginasService } from '../../services/info-paginas.service';
import { InfoPagina } from '../../interfaces/info.pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginasService,
               private router: Router) { }

  ngOnInit() {
  }
  buscarProducto( termino: string) {
    if ( termino.length < 1) {
      return;

    }
    this.router.navigate(['/search', termino]);
    console.log(termino);
  }
}
