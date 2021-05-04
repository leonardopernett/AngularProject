import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadoPadreComponent } from './pages/empleados/components/empleado-padre/empleado-padre.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/preguntas', pathMatch:'full'
  },
  { path: 'piano', loadChildren: () => import('./pages/piano/piano.module').then(m => m.PianoModule) },
  { path: 'dados', loadChildren: () => import('./pages/dados/dados.module').then(m => m.DadosModule) },
  {
    path:'empleados',component:EmpleadoPadreComponent
  },
  {
    path:'preguntas', loadChildren: ()=> import('./pages/preguntas/preguntas.module').then(m => m.PreguntasModule)
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
