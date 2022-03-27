import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-produto-add',
  templateUrl: './produto-add.component.html',
  styleUrls: ['./produto-add.component.css'],
 
})
export class ProdutoAddComponent implements OnInit {

  produtoForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
    
   }
   
   createForm(): void{
      this.produtoForm = this.formBuilder.group({
      produtoNome: ['', Validators.required],
      preco: ['', Validators.required],
      quantEst: ['', Validators.required],
      descricao: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
