import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutoresComponent } from './views/autor/listar-autores/listar-autores.component';
import { ListarClientesComponent } from './views/clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './views/home/home.component';
import { ListarLivrosComponent } from './views/livros/listar-livros/listar-livros.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { pageTitle: 'Página Inicial' },
  },
  {
    path: 'clientes/listar',
    component: ListarClientesComponent,
    data: { pageTitle: 'Listar Clientes' },
  },
  {
    path: 'autor/listar',
    component: ListarAutoresComponent,
    data: { pageTitle: 'Listar Autores' },
  },
  {
    path: 'livros/listar',
    component: ListarLivrosComponent,
    data: { pageTitle: 'Listar Livros' },
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
