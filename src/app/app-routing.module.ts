import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { CorpoComponent } from './corpo/corpo.component';



const routes: Routes = [

  { path: '' , component: CorpoComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'tarefas', component: TarefasComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
