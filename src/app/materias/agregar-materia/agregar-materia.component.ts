import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia.model';
import { NgForm } from '@angular/forms';
import { ServicioMateriasService } from 'src/app/services/servicio-materias.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.scss']
})
export class AgregarMateriaComponent implements OnInit {

  
  model = new Materia(810, "", 0, "");

  constructor(private servicioMaterias: ServicioMateriasService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(materiaForm: NgForm) {
    materiaForm.control.markAllAsTouched();
  }
  addSubject() {
    this.servicioMaterias.postRequest(this.model).subscribe(
      (respuesta: any) => {
        this.toastr.success('La Asignatura se Registro corrctamente','Registro Correcto');
        console.log(respuesta);
      },
      error => {
        this.toastr.error('Error al Registrar Asignatuta','Error de Registro');
        console.error(error);
      }
    );
    console.log(this.model);
  }

}
