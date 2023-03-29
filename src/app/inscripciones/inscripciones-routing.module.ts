import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionesComponent } from './inscripciones.component';
import { AgregarInscripcionComponent } from './agregar-inscripcion/agregar-inscripcion.component';
import { TablaInscripcionesComponent } from './tabla-inscripciones/tabla-inscripciones.component';

const routes: Routes = [
  { path: '', component: InscripcionesComponent },
  {
    path: 'agregar-inscripcion', component : AgregarInscripcionComponent
   },
   {
    path: 'tabla-inscripciones', component: TablaInscripcionesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }

