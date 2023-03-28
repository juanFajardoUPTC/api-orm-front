import {  Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {

  @Output() onSelectSubject = new EventEmitter<any>();

  materias: any[] = [
    { codigo: '1', nombre: 'Cálculo I', cupo: 50, estado: 'Disponible' },
    { codigo: '2', nombre: 'Física I', cupo: 40, estado: 'Cerrado' },
    { codigo: '3', nombre: 'Programación I', cupo: 30, estado: 'Disponible' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarMateria(materia: any) {
    this.onSelectSubject.emit(materia);
  }
}
