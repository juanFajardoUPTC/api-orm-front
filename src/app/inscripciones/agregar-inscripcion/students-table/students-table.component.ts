import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})

export class StudentsTableComponent implements OnInit {



  constructor(private servicioEstudiantes: ServicioEstudiantesService) { }

  @Output() onSelect = new EventEmitter<any>();

  
  res:any

  students = [
    { codigo: '1', nombre: 'Juan', apellido: 'Pérez', tipoDocumento: 'CC', numeroDocumento: '123456789', estado: 'Activo', genero: 'M' },
    { codigo: '2', nombre: 'María', apellido: 'González', tipoDocumento: 'CC', numeroDocumento: '987654321', estado: 'Inactivo', genero: 'F' },
    { codigo: '3', nombre: 'Pedro', apellido: 'Ramírez', tipoDocumento: 'TI', numeroDocumento: '456789123', estado: 'Activo', genero: 'M' },
  ];

  

  ngOnInit(): void {
    
    this.servicioEstudiantes.getRequest('','','').subscribe(data => {
      console.log('Data',data);
      this.res = data['estudiantes']
    }, error => {
      console.log('ERROR Al Obtener Estudiantes',error);
    });
  }
  selectStudent(student: any) {
    this.onSelect.emit(student);
  }

}
