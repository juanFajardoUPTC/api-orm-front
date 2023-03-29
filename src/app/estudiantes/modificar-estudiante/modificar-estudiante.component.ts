import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estudiante } from '../estudiante.model';

@Component({
  selector: 'app-modificar-estudiante',
  templateUrl: './modificar-estudiante.component.html',
  styleUrls: ['./modificar-estudiante.component.scss']
})
export class ModificarEstudianteComponent implements OnInit {

  @ViewChild('studentForm') studentForm!: NgForm;
  res:any
  model = new Estudiante(2023, "", "", "", "", "", "");
  data!:string;


  getData() : void{
    // const data = window.sessionStorage.getItem('selectedStudent');
    // console.log(data);
  }

  constructor() { 

  }

  ngOnInit(): void {
    const selectedStudentString = window.sessionStorage.getItem('selectedStudent');
    console.log('Estudiante',selectedStudentString);
    if (selectedStudentString) {
      const selectedStudent = JSON.parse(selectedStudentString);
      this.studentForm.setValue({
        name: selectedStudent.name,
        age: selectedStudent.age
      });
    }
  }


  onSubmit(estudianteForm: NgForm){
    estudianteForm.control.markAllAsTouched();

  }


}
