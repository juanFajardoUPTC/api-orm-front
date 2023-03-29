import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaInscripcionesComponent } from './tabla-inscripciones/tabla-inscripciones.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    InscripcionesComponent,
    TablaInscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class InscripcionesModule { }
