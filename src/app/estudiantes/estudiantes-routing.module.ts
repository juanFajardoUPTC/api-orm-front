import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';
import { TablaEstudiantesComponent } from './tabla-estudiantes/tabla-estudiantes.component';
import { AgregarComponent } from './agregar/agregar.component'; 


const routes: Routes = [{ 
  path: '', component: EstudiantesComponent
 },
 {
  path: 'tabla-estudiantes', component: TablaEstudiantesComponent

 },
 {
  path: 'agregar', component : AgregarComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
