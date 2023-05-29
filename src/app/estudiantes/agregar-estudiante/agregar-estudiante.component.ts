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
  model = new Estudiante(2023, "", "", "", "", "", "");
  imagenSeleccionada = false

  fileSelected:any;


  constructor(private servicioEstudiantes: ServicioEstudiantesService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  files: File[] = [];

  onSelect(event: any) {
    const file = event.addedFiles[0];
    this.fileSelected = file;

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
    this.model.path = this.getStringDate()+'/' + this.model.codigo,
    this.servicioEstudiantes.postRequest(this.model).subscribe(
      (      respuesta: any) => {
        this.putImagen();
        this.toastr.success('El estudiante se Registro corrctamente','Registro Correcto');
        console.log(respuesta);
       
      },
      error => {
        this.toastr.error('Error al Registrar estudiante','Error de Registro');
        console.error(error);
        
      }
    );
    console.log(this.model);
  }

  //putImagen(event:any){
    putImagen(){
    this.servicioEstudiantes.getImg({
      "object_name": this.getStringDate()+'/' + this.model.codigo,
      "expiration": 3600,
      "method": "PUT",
    }).subscribe(res=>{
      let body = JSON.parse(res['body']);
      let url = body['event_s']
      console.log(url);

this.servicioEstudiantes.UploadPresigned(url,this.fileSelected).subscribe(
  (resPresigned: any) => {
    console.log(resPresigned);
    alert('La imagen fue subida con exito')
  }
);

    })

  }

  getStringDate(){
    var d = new Date(),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

return [year, month, day].join('-');
  }



}