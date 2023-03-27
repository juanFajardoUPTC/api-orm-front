import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia.model';
import { NgForm } from '@angular/forms';
import { ServicioMateriasService } from 'src/app/services/servicio-materias.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.scss']
})
export class AgregarMateriaComponent implements OnInit {

  
  model = new Materia(810, "", 0, "");

  constructor(private servicioMaterias: ServicioMateriasService) { }

  ngOnInit(): void {
  }

  onSubmit(materiaForm: NgForm) {
    materiaForm.control.markAllAsTouched();
  }
  addSubject() {
    this.servicioMaterias.postRequest(this.model).subscribe(
      (respuesta: any) => {
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
