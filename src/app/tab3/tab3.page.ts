import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  operacao = '';
  resultado = '';

  constructor() {}

  adicionarValor(valor: string){
    this.operacao += valor;
  }
  limparOperacao(){
    this.operacao = '';
  }
  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
  }
  limparCaracter(){
    if (this.operacao.length > 0){
    this.operacao = this.operacao.substring(0, this.operacao.length -1);
  }
  }
}
