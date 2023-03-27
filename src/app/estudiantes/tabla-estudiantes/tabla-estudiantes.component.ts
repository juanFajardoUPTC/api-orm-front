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



  constructor(private servicioEstudiantes: ServicioEstudiantesService) { }

  ngOnInit(): void {
    
this.res = this.servicioEstudiantes.getRequest().subscribe(data => {
  console.log('Data',data);
  
  this.res = data['estudiantes']

  this.contarPaginas()

  

}, error => {
  console.log('ERRORRRRR',error);
});
    
  }
  cambiarPaginacion(event:any){
    this.itemsPerPage = Number(event)
    this.contarPaginas()
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
