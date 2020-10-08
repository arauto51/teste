import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  mostrar=true;
  num = 0;
  num2 = 0;
  //esconder = true;
  // = [{n1: 1, n2: 2}]
  //pessoas = [{nome : 'diego', idade : '20'}];
  produtos: number[];
  
  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.mostrar = this.mostrar;
    this.service.num2 = this.num2;
    this.service.num = this.num;
    this.produtos = this.service.getProduto();
  
  }

  //alternar(){


    //this.esconder = !this.esconder;
    
 //}


}
