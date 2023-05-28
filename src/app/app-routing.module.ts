import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),canActivate:[AuthGuard] },
  { path: 'estudiantes', loadChildren: () => import('./estudiantes/estudiantes.module').then(m => m.EstudiantesModule),canActivate:[AuthGuard] },
  { path: 'materias', loadChildren: () => import('./materias/materias.module').then(m => m.MateriasModule),canActivate:[AuthGuard] },
  { path: 'inscripciones', loadChildren: () => import('./inscripciones/inscripciones.module').then(m => m.InscripcionesModule),canActivate:[AuthGuard] },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
