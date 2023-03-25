import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    TablaEstudiantesComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule
  ]
})
export class EstudiantesModule { }
