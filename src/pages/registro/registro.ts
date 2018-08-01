import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Title } from '@angular/platform-browser';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  //Declaramos los labels
  LblNombreReg: string = 'Nombres';
  LblApellidoReg: string = 'Apellidos';
  LblEmailreg: string = 'Email';
  LblEmailRegConfirmacion: string = 'Confirmar Email';
  LblUserReg: string = 'User';
  LblPasswordReg: string = 'Password';
  LblPasswordregConfirmacion: string = 'Confirmar Password';
 
  //Declaramos las variables del input
  NombreReg: string;
  ApellidoReg: string;
  Emailreg: string;
  EmailRegConfirmacion: string;
  UserReg: string;
  PasswordReg: string;
  PasswordregConfirmacion: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  paginaRegistro(){
    this.navCtrl.push(HomePage);
  }

  validaEmail(){
    if(this.Emailreg != this.EmailRegConfirmacion){
    Title: 'Warning';
    Message: 'La confirmacion del mail no es correcta';}
  }

}
