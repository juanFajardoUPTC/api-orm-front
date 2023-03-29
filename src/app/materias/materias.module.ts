import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { MateriasComponent } from './materias.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { TablaMateriasComponent } from './tabla-materias/tabla-materias.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    MateriasComponent,
    AgregarMateriaComponent,
    TablaMateriasComponent
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class MateriasModule { }
