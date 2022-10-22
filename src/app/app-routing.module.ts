import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersViewComponent } from './components/users-view/users-view.component';

const routes: Routes = [
  { path: 'listar', component: UsersListComponent },
  { path: 'visualizar/:id', component: UsersViewComponent },
  { path: 'cadastrar', component: UsersFormComponent },
  { path: 'editar/:id', component: UsersFormComponent },
  { path: '',   redirectTo: '/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
