import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante.model';
import { NgForm } from '@angular/forms';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';





@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})
export class AgregarEstudianteComponent implements OnInit {
 
  

  res:any
  model = new Estudiante(2023, "", "", "", "", "", "");
  imagenSeleccionada = false


  constructor(private servicioEstudiantes: ServicioEstudiantesService) { }

  ngOnInit(): void {

  }

  files: File[] = [];

  onSelect(event: any) {
    const file = event.addedFiles[0];
    if (this.files.length > 0) {
      this.files.splice(0, 1);
    }
    this.files.push(file);
    this.imagenSeleccionada = true;
  }
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

 



  onSubmit(estudianteForm: NgForm){
    estudianteForm.control.markAllAsTouched();

  }
  
  get currentEstudiante() {
    return JSON.stringify(this.model);
  }
  
  addStudent() {
    this.servicioEstudiantes.postRequest(this.model).subscribe(
      (      respuesta: any) => {
        // Manejar la respuesta exitosa aquí
        console.log(respuesta);
      },
      error => {
        // Manejar el error aquí
        console.error(error);
      }
    );
    console.log(this.model);
  }

}
