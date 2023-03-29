import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class TablaEstudiantesComponent implements OnInit {

  @Output() onSelect = new EventEmitter<any>();

  students = [
    { codigo: '1', nombre: 'Juan', apellido: 'Pérez', tipoDocumento: 'CC', numeroDocumento: '123456789', estado: 'Activo', genero: 'M' },
    { codigo: '2', nombre: 'María', apellido: 'González', tipoDocumento: 'CC', numeroDocumento: '987654321', estado: 'Inactivo', genero: 'F' },
    { codigo: '3', nombre: 'Pedro', apellido: 'Ramírez', tipoDocumento: 'TI', numeroDocumento: '456789123', estado: 'Activo', genero: 'M' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectStudent(student: any) {
    this.onSelect.emit(student);
  }
}