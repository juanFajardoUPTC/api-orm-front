import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    EstudiantesComponent,
    TablaEstudiantesComponent,
    AgregarEstudianteComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    NgxPaginationModule

  ]
})
export class EstudiantesModule { }
