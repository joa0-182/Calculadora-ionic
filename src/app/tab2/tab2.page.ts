import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valor1: number;
  valor2: number;
  resultado: number;
  operacao = '';

  maior: number;
  menor: number;

  constructor(private alertController: AlertController) { }

  async mostrarSomar() {
    this.resultado = (+this.valor1 + +this.valor2);
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Operação SOMA entre os valores',
      message: `<p>Valor um: ${this.valor1}</p>  <p>Valor dois: ${this.valor2}</p> Resultado: ${this.resultado} `,
      buttons: ['OK'],
    })
    this.operacao = "Soma"
    ;

    await alert.present();
  }

  async mostrarSubtracao() {
    this.resultado = this.valor1 - this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Operação SUBTRAIR entre os valores',
      message: `<p>Valor um: ${this.valor1}</p>  <p>Valor dois: ${this.valor2}</p> Resultado: ${this.resultado} `,
      buttons: ['OK'],
    })
    this.operacao = "Subtração"
    ;

    await alert.present();
  }

  async mostrarMultiplicacao() {
    this.resultado = this.valor1 * this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Operação MULTIPLICAÇÃO entre os valores',
      message: `<p>Valor um: ${this.valor1}</p>  <p>Valor dois: ${this.valor2}</p> Resultado: ${this.resultado} `,
      buttons: ['OK'],
    })
    this.operacao = "Multiplicação"
    ;

    await alert.present();
  }

  async mostrarDivisao() {
    this.resultado = this.valor1 - this.valor2;
    const alert = await this.alertController.create({
      header: 'Resultado',
      subHeader: 'Operação DIVISÃO entre os valores',
      message: `<p>Valor um: ${this.valor1}</p>  <p>Valor dois: ${this.valor2}</p> Resultado: ${this.resultado} `,
      buttons: ['OK'],
    })
    this.operacao = "Divisão"
    ;

    await alert.present();
  }

  async mostrarMaior() {
    if (Number(this.valor1) > Number(this.valor2) || Number(this.valor2) < Number(this.valor1)) {
      const alert = await this.alertController.create({
        header: 'Resultado',
        subHeader: 'Maior Número',
        message:  `${this.valor1}`,
        buttons: ['OK'],
      });

      await alert.present();
    } else if (Number(this.valor2) > Number(this.valor1) || Number(this.valor1) < Number(this.valor2)) {
      const alert = await this.alertController.create({
        header: 'Resultado',
        subHeader: 'Maior Número',
        message:  `${this.valor2}`,
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Resultado',
        subHeader: 'Maior Número',
        message:  `Os valores são iguais`,
        buttons: ['OK'],
      });

      await alert.present();
    }

  }

  async mostrarMenor() {
    if (Number(this.valor1) < Number(this.valor2) || Number(this.valor2) > Number(this.valor1)) {
      const alert = await this.alertController.create({
        header: 'Resultado',
        subHeader: 'Menor Número',
        message:  `${this.valor1}`,
        buttons: ['OK'],
      });

      await alert.present();
    } else if (Number(this.valor2) < Number(this.valor1) || Number(this.valor1) > Number(this.valor2)) {
      const alert = await this.alertController.create({
        header: 'Resultado',
        subHeader: 'Menor Número',
        message:  `${this.valor2}`,
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Resultado',
        subHeader: 'Menor Número',
        message:  `Os valores são iguais`,
        buttons: ['OK'],
      });

      await alert.present();
    }

  }

  async limpar() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.resultado = 0;
  }

}
