import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from "ng2-al-slim-bar";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/br';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoAddComponent } from './produto-add/produto-add.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutoGetComponent } from './produto-get/produto-get.component';
import { registerLocaleData } from '@angular/common';
import { ProdutoService } from './produto.service';

registerLocaleData(ptBr, 'pt-Br');

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
    SlimLoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    ProdutoService,
    {
    provide:LOCALE_ID, 
    useValue: 'pt-Br',
      
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
