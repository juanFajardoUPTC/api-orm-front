import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { ModificarEstudianteComponent } from './modificar-estudiante/modificar-estudiante.component';

const routes: Routes = [
  { 
  path: '', component: EstudiantesComponent
 },
 {
  path: 'tabla-estudiantes', component: TablaEstudiantesComponent

 },
 {
  path: 'agregar-estudiante', component : AgregarEstudianteComponent
 },
 {
  path: 'modificar-estudiante', component : ModificarEstudianteComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
