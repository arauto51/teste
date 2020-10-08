import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  num = 0;
  num2 = 0;
  
  getProduto(){

    return [this.num + this.num2];
    
  }


  constructor() { }

}
