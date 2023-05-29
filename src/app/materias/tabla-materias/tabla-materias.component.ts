import { Component, OnInit } from '@angular/core';
import { ServicioMateriasService } from 'src/app/services/servicio-materias.service';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Materia } from '../materia.model';

@Component({
  selector: 'app-tabla-materias',
  templateUrl: './tabla-materias.component.html',
  styleUrls: ['./tabla-materias.component.scss']
})
export class TablaMateriasComponent implements OnInit {

  res:any = [];
  fmRcurso: FormGroup;
  selected_student:any;

  paginaActual = 1
  itemsPerPage = 5
  totalPaginas = 1

  ordenamiento ='asc'
  columna = 'codigo'
  busqueda = ''
  model1:any;



  constructor(private servicioEstudiantes: ServicioMateriasService,
    private formBuilder: FormBuilder,
     private toastr: ToastrService
    ) { 
    this.fmRcurso = this.formBuilder.group({
      codigo:['',[Validators.required,Validators.minLength(5)]],
      nombre: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      cupos:['',[Validators.required, Validators.pattern('^[0-9]+$')]],
      estado:['',[Validators.required]],
    })

  }

  ngOnInit(): void {
    
this.servicioEstudiantes.getRequest(this.columna,this.ordenamiento,this.busqueda).subscribe(data => {
  console.log('Data',data);

  if(data['materias'])
  this.res = data['materias']
  else
  this.res = data

  this.contarPaginas()

}, error => {
  console.log('ERROR',error);
});
    
  }
  cambiarPaginacion(key:string,event:any){

    if(key == 'mostrar')
    this.itemsPerPage = Number(event)
    
    if(key == 'columna')
    this.columna = event
    
    if (key == 'ordenamiento') {
      this.ordenamiento = event
      if (this.ordenamiento == 'Ascendente')
        this.ordenamiento = 'asc'
        else
        this.ordenamiento = 'desc'

    }
    
    if(key == 'busqueda')
    this.busqueda = event
    
    

      this.servicioEstudiantes.getRequest(this.columna,this.ordenamiento,this.busqueda).subscribe(data => {
        console.log('Data',data);
        if(data['materias'])
  this.res = data['materias']
  else
  this.res = data
        this.contarPaginas()

      }, error => {
        console.log('ERROR',error);
      });
    
    this.contarPaginas()
  }

  llenarLista(){

  }
  contarPaginas(){
    this.totalPaginas = 0
    this.paginaActual = 1
    for (let index = 0, c = 0; index < this.res.length; index++, c++) {
      const element = this.res[index];
      if(this.res.length <= this.itemsPerPage){
        this.totalPaginas = 1
        break
      }
      else
      if(c == this.itemsPerPage){
        this.totalPaginas++
        c = 0
      }
       
      if(index == this.res.length - 1){
        this.totalPaginas++
      }
      
    }
  }


  selectStudent(student: any) {
    this.selected_student = student;
    this.fmRcurso.setValue({
      codigo: this.selected_student.codigo,
      nombre: this.selected_student.nombre,
      cupos: this.selected_student.cupos,
      estado: this.selected_student.estado,
      //path:this.selected_student.path,
    });
  }

  
  disable_state(student: any) {
    const newEstado = student.estado === 'I' ? 'A' : 'I';
    const student_disable_state = { codigo: student.codigo, estado: newEstado };
    this.servicioEstudiantes.patchRequest(student_disable_state).subscribe(
      (respuesta: any) => {
        const mensaje = newEstado === 'A' ? 'Asignatura habilitada' : 'Asignatura deshabilitada';
        this.toastr.success(`La asignatura fue ${mensaje}`, mensaje);
        console.log(respuesta);
      },
      error => {
        console.error("Error al cambiar el estado", error);
        this.toastr.error(`Error al cambiar el estado de la asignatura`, 'Error al cambiar el estado');
      }
    );
  }

  onSubmit(){
    console.log("se carga de datos")
     this.model1 = new Materia(
       this.fmRcurso.value.codigo, 
       this.fmRcurso.value.nombre, 
       this.fmRcurso.value.cupos, 
       this.fmRcurso.value.estado); 
       this.updateStudent()
       
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

  isEstudianteHabilitado(estudiante: any): boolean {
    return estudiante.estado == 'A';
  }
  

}

