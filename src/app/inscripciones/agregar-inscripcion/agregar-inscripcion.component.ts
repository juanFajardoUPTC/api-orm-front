import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.scss']
})
export class AgregarInscripcionComponent implements OnInit {
  estudiante: any;
  selectedSubject: any;
  selectedDate: string;
  
  currentDate : string= new Date().toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-').split("-").reverse().join("-");

  constructor() {
    this.selectedDate = this.currentDate;
  }

  //se envia a consola pero deberia llamar a servicio post de inscripciones
  onButtonClick() {
    console.log(this.estudiante.codigo,this.selectedSubject.codigo,this.selectedDate);
  }

  ngOnInit(): void {
    this.selectedSubject = null;
    this.currentDate
    
  }

  onSubjectSelected(materia: any) {
    this.selectedSubject = materia;
  }

  onDateSelected(event: any) {
   this.selectedDate = event.target.value;
  }

}