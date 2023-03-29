import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  estudiante: any;
  selectedSubject: any;

  name = new FormControl('')

  constructor() { }

  ngOnInit(): void {
    this.selectedSubject = null;
  }

  onSubjectSelected(materia: any) {
    this.selectedSubject = materia;
  }

}