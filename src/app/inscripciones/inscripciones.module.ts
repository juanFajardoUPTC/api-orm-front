import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaInscripcionesComponent } from './tabla-inscripciones/tabla-inscripciones.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { TablaEstudiantesComponent } from './students-table/students-table.component';
import { TablaMateriasComponent} from './subjects-table/subjects-table.component';


import { AgregarInscripcionComponent } from './agregar-inscripcion/agregar-inscripcion.component';
import { StudentsTableComponent } from './agregar-inscripcion/students-table/students-table.component';
import { SubjectsTableComponent } from './agregar-inscripcion/subjects-table/subjects-table.component';


@NgModule({
  declarations: [
    InscripcionesComponent,
    
    TablaEstudiantesComponent,
    TablaMateriasComponent,


    TablaInscripcionesComponent,
    AgregarInscripcionComponent,
    StudentsTableComponent,
    SubjectsTableComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class InscripcionesModule { }
