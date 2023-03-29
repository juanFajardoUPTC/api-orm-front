import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Estudiante } from '../estudiante.model';
import { FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modificar-estudiante',
  templateUrl: './modificar-estudiante.component.html',
  styleUrls: ['./modificar-estudiante.component.scss']
})
export class ModificarEstudianteComponent implements OnInit {


  res: any
  model = new Estudiante(2023, "", "", "", "", "", "");
  data!: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      codigo: [0],
      nombre: [''],
      apellido: [''],
      tipo_documento: [''],
      numero_documento: [''],
      estado: [''],
      genero: ['']
    });
  }

  ngOnInit(): void {
    const estudianteJSON = window.sessionStorage.getItem('estudiante')

    if (estudianteJSON !== null) {

      const estudiante = JSON.parse(estudianteJSON);
      this.form.patchValue({
        codigo: parseInt(estudiante.codigo),
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        tipo_documento: estudiante.tipo_documento,
        numero_documento: estudiante.numero_documento,
        estado: estudiante.estado,
        genero: estudiante.genero,
      });

      // Aquí puedes acceder a las propiedades del objeto estudiante
    } else {
      // Aquí puedes manejar el caso en que la clave 'estudiante' no existe en el almacenamiento de la sesión
    }



  }


  onSubmit(estudianteForm: NgForm) {
    estudianteForm.control.markAllAsTouched();

  }


}
