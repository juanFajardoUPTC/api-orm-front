import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasComponent } from './materias.component';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { TablaMateriasComponent } from './tabla-materias/tabla-materias.component';

const routes: Routes = [{
  path: '', component: MateriasComponent
},
{
  path: 'agregar-materia', component: AgregarMateriaComponent
},
{
  path: 'tabla-materias', component: TablaMateriasComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
