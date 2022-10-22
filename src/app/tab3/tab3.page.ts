import { IMemoria } from './../models/IMemoria.model';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '-', '+'];

  memoria: IMemoria[] = [];

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {}

  async mostrarAviso(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present();
  }

  adicionarValor(valor: string){
    this.caracter = this.caracteres.includes(valor);

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }

  adicionarMemoria() {
    if (this.operacao != '' && this.resultado != '') {
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);

    } else if (this.operacao != '' && this.resultado == '') {
      this.calcularOperacao();
      const memoria: IMemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
    } else {
      this.mostrarAviso('Aviso', 'Nada para salvar');
    }

    console.log(this.memoria);
  }

  adicaoMemoria() {
    //
  }

  subtracaoMemoria() {
    //
  }

  armazenamentoMemoria() {
    //
  }

  limparOperacao(){
    this.operacao = '';
    this.numero = false;
  }
  interValor() {
    //
  }

  calcularOperacao() {
    try {
    this.resultado = evaluate(this.operacao);
    } catch (err) {
      this.resultado = 'Inválido';
    }
  }


  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }
  limparCaracter(){
    if (this.operacao.length > 0){
    this.operacao = this.operacao.substring(0, this.operacao.length -1);
    }

    const ultimo = this.operacao.substring(this.operacao.length,1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false;
    }
  }
}
