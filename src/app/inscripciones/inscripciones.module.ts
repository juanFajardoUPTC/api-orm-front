import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';

import { TablaEstudiantesComponent } from './students-table/students-table.component';
import { TablaMateriasComponent} from './subjects-table/subjects-table.component';




@NgModule({
  declarations: [
    InscripcionesComponent,
    
    TablaEstudiantesComponent,
    TablaMateriasComponent,


  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule
  ]
})
export class InscripcionesModule { }
