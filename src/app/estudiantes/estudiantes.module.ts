import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
<<<<<<< Updated upstream
import { AgregarComponent } from './agregar/agregar.component';
=======
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

>>>>>>> Stashed changes


@NgModule({
  declarations: [
    EstudiantesComponent,
    TablaEstudiantesComponent,
<<<<<<< Updated upstream
    AgregarComponent
=======
    AgregarEstudianteComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ]
})
export class EstudiantesModule { }
