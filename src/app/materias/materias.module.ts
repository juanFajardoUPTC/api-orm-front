import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasComponent } from './materias.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';


@NgModule({
  declarations: [
    MateriasComponent,
    AgregarMateriaComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule
  ]
})
export class MateriasModule { }
