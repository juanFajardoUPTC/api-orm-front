import {  Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ServicioMateriasService} from 'src/app/services/servicio-materias.service';

@Component({
  selector: 'app-subjects-table',
  templateUrl: './subjects-table.component.html',
  styleUrls: ['./subjects-table.component.scss']
})
export class SubjectsTableComponent implements OnInit {

  constructor(private servicioMaterias: ServicioMateriasService) { }

  @Output() onSelectSubject = new EventEmitter<any>();

  res :any

  materias: any[] = [
    { codigo: '1', nombre: 'Cálculo I', cupo: 50, estado: 'Disponible' },
    { codigo: '2', nombre: 'Física I', cupo: 40, estado: 'Cerrado' },
    { codigo: '3', nombre: 'Programación I', cupo: 30, estado: 'Disponible' }
  ];

 

  ngOnInit(): void {
    this.servicioMaterias.getRequest().subscribe(data => {
      this.res = data['materias']
    },error => {
      console.log('ERROR Al Obtener Materias',error);
    });
  }

  seleccionarMateria(materia: any) {
    this.onSelectSubject.emit(materia);
  }
}
