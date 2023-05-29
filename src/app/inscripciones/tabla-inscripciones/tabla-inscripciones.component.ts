import { Component, OnInit } from '@angular/core';
import { ServicioInscripcionesService } from 'src/app/services/servicio-inscripciones.service';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { inscripcion } from '../agregar-inscripcion/inscripcion.model';

@Component({
  selector: 'app-tabla-inscripciones',
  templateUrl: './tabla-inscripciones.component.html',
  styleUrls: ['./tabla-inscripciones.component.scss']
})
export class TablaInscripcionesComponent implements OnInit {

  res: any = []
  paginaActual = 1
  itemsPerPage = 5
  totalPaginas = 1
  fmRcurso: FormGroup;
  model1: any

  ordenamiento = 'asc'
  columna = 'id_inscripcion'
  busqueda = ''
  selected_student:any;


  constructor(private servicioEstudiantes: ServicioInscripcionesService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { 
      this.fmRcurso = this.formBuilder.group({
        id_inscripcion: ['', [Validators.required, Validators.minLength(5)]],
        codigo_estudiante:['',[Validators.required,Validators.minLength(5)]],
        codigo_materia:['',[Validators.required,Validators.minLength(5)]],
        fecha_inscripcion:['',[Validators.required]],
      })

    }

  ngOnInit(): void {

    this.servicioEstudiantes.getRequest(this.columna, this.ordenamiento, this.busqueda).subscribe(data => {
      console.log('Data', data);

      if (data['inscripciones'])
        this.res = data['inscripciones']
      else
        this.res = data

      this.contarPaginas()

    }, error => {
      console.log('ERROR', error);
    });

  }
  cambiarPaginacion(key: string, event: any) {

    if (key == 'mostrar')
      this.itemsPerPage = Number(event)

    if (key == 'columna')
      this.columna = event

    if (key == 'ordenamiento') {
      this.ordenamiento = event
      if (this.ordenamiento == 'Ascendente')
        this.ordenamiento = 'asc'
      else
        this.ordenamiento = 'desc'

    }

    if (key == 'busqueda')
      this.busqueda = event



    this.servicioEstudiantes.getRequest(this.columna, this.ordenamiento, this.busqueda).subscribe(data => {
      console.log('Data', data);
      if (data['inscripciones'])
        this.res = data['inscripciones']
      else
        this.res = data
      this.contarPaginas()

    }, error => {
      console.log('ERROR', error);
    });

    this.contarPaginas()

  }

  llenarLista() {

  }
  contarPaginas() {
    this.totalPaginas = 0
    this.paginaActual = 1
    for (let index = 0, c = 0; index < this.res.length; index++, c++) {
      const element = this.res[index];
      if (this.res.length <= this.itemsPerPage) {
        this.totalPaginas = 1
        break
      }
      else
        if (c == this.itemsPerPage) {
          this.totalPaginas++
          c = 0
        }

      if (index == this.res.length - 1) {
        this.totalPaginas++
      }

    }
  }

  onSubmit(){
    console.log("se carga de datos")
     this.model1 = new inscripcion (
      this.fmRcurso.value.id_inscripcion,
       this.fmRcurso.value.codigo_estudiante, 
       this.fmRcurso.value.codigo_materia, 
       this.fmRcurso.value.fecha_inscripcion); 
       this.updateStudent()
   }

   
   selectStudent(student: any) {
    this.selected_student = student;
    this.fmRcurso.setValue({
      id_inscripcion: this.selected_student.id_inscripcion,
      codigo_estudiante: this.selected_student.codigo_estudiante,
      codigo_materia: this.selected_student.codigo_materia,
      fecha_inscripcion: this.selected_student.fecha_inscripcion,
      //path:this.selected_student.path,
    });
  }


   
   updateStudent() {
    this.servicioEstudiantes.putRequest(this.model1) .subscribe(
       (      respuesta: any) => {
         this.toastr.success(`Asignatura ${this.model1.nombre} se actualizó correctamente`, ' Asignatura actualizado');
         console.log(respuesta);
       },
       error => {
         this.toastr.error(`No se Logro Actualizar la asignatura ${this.model1.nombre}`,'Error al Actualizar');
         console.error(error);
       }
     );
     console.log(this.model1);
   }


}

