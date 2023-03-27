import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasComponent } from './materias.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MateriasComponent,
    AgregarMateriaComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MateriasModule { }
