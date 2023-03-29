import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'estudiantes', loadChildren: () => import('./estudiantes/estudiantes.module').then(m => m.EstudiantesModule) }, { path: 'materias', loadChildren: () => import('./materias/materias.module').then(m => m.MateriasModule) }, { path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule) },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
