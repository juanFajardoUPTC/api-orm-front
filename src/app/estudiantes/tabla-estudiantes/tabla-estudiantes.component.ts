import { Component, OnInit } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';

@Component({
  selector: 'app-tabla-estudiantes',
  templateUrl: './tabla-estudiantes.component.html',
  styleUrls: ['./tabla-estudiantes.component.scss']
})
export class TablaEstudiantesComponent implements OnInit {

  res:any

  constructor(private servicioEstudiantes: ServicioEstudiantesService) { }

  ngOnInit(): void {
    
this.res = this.servicioEstudiantes.postRequest({})
    
  }

}
