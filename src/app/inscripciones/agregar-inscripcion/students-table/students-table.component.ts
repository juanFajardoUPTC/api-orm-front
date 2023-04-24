import { Component,Output, OnInit, EventEmitter } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})

export class StudentsTableComponent implements OnInit {

  constructor(private servicioEstudiantes: ServicioEstudiantesService) { }

  @Output() onSelect = new EventEmitter<any>();

  ordenamiento = 'asc'
  columna = 'codigo'
  busqueda = ''
  res:any

   ngOnInit(): void {
    
this.servicioEstudiantes.getRequest().subscribe(data => {
      console.log('Data',data);
      this.res = data
    }, error => {
      console.log('ERROR Al Obtener Estudiantes',error);
    });
  }
  selectStudent(student: any) {
    this.onSelect.emit(student);
    console.log (student.nombre)
    student.nombre
  }
}