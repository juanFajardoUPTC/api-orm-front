import { Component, OnInit } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';
import { Router } from '@angular/router';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Estudiante } from '../estudiante.model';


@Component({
  selector: 'app-tabla-estudiantes',
  templateUrl: './tabla-estudiantes.component.html',
  styleUrls: ['./tabla-estudiantes.component.scss']
})


export class TablaEstudiantesComponent implements OnInit {
  res: any = [];
  students: any[] = [];
  paginaActual = 1
  itemsPerPage = 5
  totalPaginas = 1
  ordenamiento = 'asc'
  columna = 'codigo'
  busqueda = ''
  fmRcurso: FormGroup;
  selected_student:any;
  model = new Estudiante(2023, "", "", "", "", "", "");
  model1:any;

  
  constructor(
    private servicioEstudiantes: ServicioEstudiantesService,
     private router: Router,
     private formBuilder: FormBuilder
  
     ) {
      this.fmRcurso = this.formBuilder.group({
        codigo:['',[Validators.required,Validators.minLength(5)]],
        nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        apellido:['',[Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        genero:['',[Validators.required]],
        numero_documento:['',[Validators.required]],
        tipo_documento:['',[Validators.required]],
        estado:['',[Validators.required]],
      })
      }
  

  ngOnInit(): void {
    this.servicioEstudiantes.getRequest(this.columna, this.ordenamiento, this.busqueda).subscribe(data => {
      console.log('Data', data);
      if(data['estudiantes'])
      this.res = data['estudiantes']
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
      if(data['estudiantes'])
      this.res = data['estudiantes']
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


  selectStudent(student: any) {
    this.selected_student = student;
    this.fmRcurso.setValue({
      codigo: this.selected_student.codigo,
      nombre: this.selected_student.nombre,
      apellido: this.selected_student.apellido,
      genero: this.selected_student.genero,
      numero_documento: this.selected_student.numero_documento,
      tipo_documento: this.selected_student.tipo_documento,
      estado: this.selected_student.estado,
    });
  }

  disable_state(student: any){
    const student_disable_state = { codigo: student.codigo,estado: student ='I'};


    //this.servicioEstudiantes.patchRequest(student_disable_state ).


    this.servicioEstudiantes.patchRequest(student_disable_state ).subscribe(
      (      respuesta: any) => {
        // Manejar la respuesta exitosa aquí
        console.log(respuesta);
      },
      error => {
        // Manejar el error aquí
        console.error("error al hinabilitar" ,error );
      }
    );
  }
  

  updateStudent() {
   this.servicioEstudiantes.putRequest(this.model1) .subscribe(
      (      respuesta: any) => {
        // Manejar la respuesta exitosa aquí
        console.log(respuesta);
      },
      error => {
        // Manejar el error aquí
        console.error(error);
      }
    );
    console.log(this.model1);
  }

  goTomod() {
    this.router.navigate(['/estudiantes/modificar-estudiante']);
  }




  onSubmit(){
   console.log("se carga de datos")
    this.model1 = new Estudiante(
      this.fmRcurso.value.codigo, 
      this.fmRcurso.value.nombre, 
      this.fmRcurso.value.apellido, 
      this.fmRcurso.value.tipo_documento, 
      this.fmRcurso.value.numero_documento, 
      this.fmRcurso.value.estado, 
      this.fmRcurso.value.genero,
      "");
      this.updateStudent();
      
     

  }

}
