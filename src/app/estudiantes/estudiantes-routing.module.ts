import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
<<<<<<< Updated upstream
import { AgregarComponent } from './agregar/agregar.component'; 

=======
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { 
  path: '', component: EstudiantesComponent
 },
 {
  path: 'tabla-estudiantes', component: TablaEstudiantesComponent

 },
 {
<<<<<<< Updated upstream
  path: 'agregar', component : AgregarComponent
=======
  path: 'agregar-estudiante', component : AgregarEstudianteComponent
>>>>>>> Stashed changes
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
