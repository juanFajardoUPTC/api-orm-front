import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones.component';
import { TablaInscripcionesComponent } from './tabla-inscripciones/tabla-inscripciones.component';
import { AgregarInscripcionComponent } from './agregar-inscripcion/agregar-inscripcion.component'

const routes: Routes = [
  { path: '', component: InscripcionesComponent },
  {
    path: 'tabla-inscripciones', component: TablaInscripcionesComponent
  },
  {
    path: 'agregar-inscripcion', component : AgregarInscripcionComponent
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
