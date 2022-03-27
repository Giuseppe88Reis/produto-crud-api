import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from "ng2-al-slim-bar";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoGetComponent } from './produto-get/produto-get.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoAddComponent,
    ProdutoEditComponent,
    ProdutoGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
