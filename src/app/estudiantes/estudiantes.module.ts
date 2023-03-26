import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [
    EstudiantesComponent,
    TablaEstudiantesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule
  ]
})
export class EstudiantesModule { }
