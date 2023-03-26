import { Component, OnInit } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  res:any

  constructor() { }

  ngOnInit(): void {
   
  }

}
