import { Component, OnInit } from '@angular/core';
import { ServicioEstudiantesService } from 'src/app/services/servicio-estudiantes.service';

@Component({
  selector: 'app-tabla-estudiantes',
  templateUrl: './tabla-estudiantes.component.html',
  styleUrls: ['./tabla-estudiantes.component.scss']
})
export class TablaEstudiantesComponent implements OnInit {

  res:any
  paginaActual = 1
  itemsPerPage = 5
  totalPaginas = 1

  ordenamiento ='Ascendente'
  columna = 'codigo'
  busqueda = ''



  constructor(private servicioEstudiantes: ServicioEstudiantesService) { }

  ngOnInit(): void {
    
this.servicioEstudiantes.getRequest(this.columna,this.ordenamiento,this.busqueda).subscribe(data => {
  console.log('Data',data);
  this.res = data['estudiantes']
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
    
    if(key == 'ordenamiento')
    this.ordenamiento = event
    
    if(key == 'busqueda')
    this.busqueda = event
    
    

      this.servicioEstudiantes.getRequest(this.columna,this.ordenamiento,this.busqueda).subscribe(data => {
        console.log('Data',data);
        this.res = data['estudiantes']
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
