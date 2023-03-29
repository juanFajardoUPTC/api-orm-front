import { Component, OnInit } from '@angular/core';
import { ServicioInscripcionesService } from 'src/app/services/servicio-inscripciones.service';

@Component({
  selector: 'app-tabla-inscripciones',
  templateUrl: './tabla-inscripciones.component.html',
  styleUrls: ['./tabla-inscripciones.component.scss']
})
export class TablaInscripcionesComponent implements OnInit {

  res:any = []
  paginaActual = 1
  itemsPerPage = 5
  totalPaginas = 1

  ordenamiento ='asc'
  columna = 'id_inscripcion'
  busqueda = ''



  constructor(private servicioEstudiantes: ServicioInscripcionesService) { }

  ngOnInit(): void {
    
this.servicioEstudiantes.getRequest(this.columna,this.ordenamiento,this.busqueda).subscribe(data => {
  console.log('Data',data);

  if(data['inscripciones'])
  this.res = data['inscripciones']
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
        if(data['inscripciones'])
  this.res = data['inscripciones']
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

}

