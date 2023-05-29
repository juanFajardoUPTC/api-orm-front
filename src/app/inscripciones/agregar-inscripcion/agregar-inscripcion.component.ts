import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { inscripcion } from '../agregar-inscripcion/inscripcion.model';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';
import { ServicioMateriasService } from 'src/app/services/servicio-materias.service';
import { ServicioInscripcionesService} from 'src/app/services/servicio-inscripciones.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-agregar-inscripcion',
  templateUrl: './agregar-inscripcion.component.html',
  styleUrls: ['./agregar-inscripcion.component.scss']
})



export class AgregarInscripcionComponent implements OnInit {
  res: any = [];
  resMate: any= [];
  estudianteSeleccionado: any
  materiaSeleccionada: any
  selectedDate: string;
  codigoEstudiante: number = 0;
  nombreEstudiante:string='';
  codigoMateria: number=0;
  nombreMateria:string ='';

  paginaActualEstudiantes = 2
  itemsPerPageEstudiantes = 5
  totalPaginasEstudiantes = 1

  
  paginaActualMaterias = 1
  itemsPerPageMaterias = 5
  totalPaginasMaterias = 1
  


  ordenamiento = 'asc'
  columna = 'codigo'
  busqueda = ''

  model = new inscripcion(11,2023, 2, "");

  currentDate : string= new Date().toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-').split("-").reverse().join("-");

  constructor(private servicioEstudiantes: ServicioEstudiantesService, 
     private servicioMaterias: ServicioMateriasService,
     private ServicioInscripciones: ServicioInscripcionesService,
     private toastr: ToastrService) {
    this.selectedDate = this.currentDate;
    
  }

 //se envia a consola pero deberia llamar a servicio post de inscripciones
 onButtonClick() {
  console.log(this.estudianteSeleccionado.codigo,this.materiaSeleccionada.codigo,this.selectedDate)
}

ngOnInit(): void {
  this.currentDate
  
}


onSubmit(estudianteForm: NgForm){
  estudianteForm.control.markAllAsTouched();
}



search(): void {
  this.searchItems();
  this.searchItemsMaterias();
}


searchItems() {
    this.servicioEstudiantes.getRequest(this.columna, this.ordenamiento,this.codigoEstudiante.toString(), this.nombreEstudiante).subscribe(data => {
     if (data['estudiantes']) {
      this.res = data['estudiantes'];
    } else {
      this.res = data;
    }
  }, error => {
    console.log('ERROR', error);
  });
  this.contarPaginas()
  console.log("3eeeeeeeeeeeeeee",this.res)
}


searchItemsMaterias() {
  this.servicioMaterias.getRequest(this.columna,this.ordenamiento,this.codigoMateria.toString(),this.nombreMateria).subscribe(data => {
    console.log('Data',data);
    if(data['materias'])
    this.resMate = data['materias']
    else
    this.resMate = data
  }, error => {
    console.log('ERROR',error);
  });
  this.contarPaginasMate()

}

/*
contarPaginasMate() {
  this.totalPaginasMaterias = Math.ceil(this.resMate.length / this.itemsPerPageMaterias);
  this.paginaActualMaterias = 1;
}*/

contarPaginas() {
  this.totalPaginasEstudiantes = 0
  this.paginaActualEstudiantes = 1
  for (let index = 0, c = 0; index < this.res.length; index++, c++) {
    const element = this.res[index];
    if (this.res.length <= this.itemsPerPageEstudiantes) {
      this.totalPaginasEstudiantes = 1
      break
    }
    else
      if (c == this.itemsPerPageEstudiantes) {
        this.totalPaginasEstudiantes++
        c = 0
      }

    if (index == this.res.length - 1) {
      this.totalPaginasEstudiantes++
    }

  }
}

contarPaginasMate() {
  this.totalPaginasMaterias = 0
  this.paginaActualMaterias = 1
  for (let index = 0, c = 0; index < this.resMate.length; index++, c++) {
    const element = this.resMate[index];
    if (this.resMate.length <= this.itemsPerPageMaterias) {
      this.totalPaginasMaterias = 1
      break
    }
    else
      if (c == this.itemsPerPageMaterias) {
        this.totalPaginasMaterias++
        c = 0
      }

    if (index == this.resMate.length - 1) {
      this.totalPaginasMaterias++
    }

  }
}


estudianteSelected(estudiante: any) {
  this.estudianteSeleccionado= estudiante;
}

materiaSelected(materia: any) {
  this.materiaSeleccionada= materia;
}

onDateSelected(event: any) {
  this.selectedDate = event.target.value;
 }



onEstudiantesPageChange(event: number) {
  this.paginaActualEstudiantes = event;
}


onMateriasPageChange(event: number) {
  this.paginaActualMaterias = event;
}



addSInscrip() {
  this.model.codigo_estudiante =  this.estudianteSeleccionado.codigo,
  this.model.codigo_materia = this.materiaSeleccionada.codigo,
  this.model.fecha_inscripcion =this.selectedDate,
  this.ServicioInscripciones.postRequest(this.model).subscribe(
    ( respuesta: any) => {
      this.toastr.success(' inscripcion realizada','Registro Correcto');
      console.log(respuesta);
     
    },
    error => {
      this.toastr.error('Error en la inscripcion','Error de Registro');
      console.error(error);
      
    }
  );
  console.log(this.model);
}



}
