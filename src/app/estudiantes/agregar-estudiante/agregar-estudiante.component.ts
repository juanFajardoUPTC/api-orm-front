import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante.model';
import { NgForm } from '@angular/forms';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss']
})
export class AgregarEstudianteComponent implements OnInit {
 
  

  res:any
  model = new Estudiante(2023, "", "", "", "", "", "","https://cdn-icons-png.flaticon.com/512/3059/3059518.png");
  imagenSeleccionada = false


  constructor(
    private servicioEstudiantes: ServicioEstudiantesService ,
    private toastr: ToastrService) {
   }

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
        console.log(respuesta);
        this.toastr.success('El estudiante se Registro corrctamente','Registro Correcto');
      },
      error => {
        console.error(error);
        this.toastr.error('Error al Registrar estudiante','Error de Registro');
      }
    );
    console.log("el estudiante a registrar es: " , this.model);
  }

}
