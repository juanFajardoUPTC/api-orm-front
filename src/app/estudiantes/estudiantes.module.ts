import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModificarEstudianteComponent } from './modificar-estudiante/modificar-estudiante.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    EstudiantesComponent,
    TablaEstudiantesComponent,
    AgregarEstudianteComponent,
    ModificarEstudianteComponent
  ],
  imports: [ FormsModule,
    ReactiveFormsModule,
    CommonModule,
    EstudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDropzoneModule

  ]
})
export class EstudiantesModule { }
