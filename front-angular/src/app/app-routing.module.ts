import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component'; 
import { ProdutoGetComponent } from './produto-get/produto-get.component'; 

const routes: Routes = [
  {path:'produto/create', component: ProdutoAddComponent },
  {path:'produto/:id', component: ProdutoEditComponent },
  {path:'produto', component: ProdutoGetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
