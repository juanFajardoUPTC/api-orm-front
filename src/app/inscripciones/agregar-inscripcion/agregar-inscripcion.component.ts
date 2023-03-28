import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.scss']
})
export class AgregarInscripcionComponent implements OnInit {

  estudiante: any;
  selectedSubject: any;

  onButtonClick() {
    console.log(this.estudiante.codigo,this.selectedSubject.codigo);
  }

  ngOnInit(): void {
    this.selectedSubject = null;
  }

  onSubjectSelected(materia: any) {
    this.selectedSubject = materia;
  }

}
