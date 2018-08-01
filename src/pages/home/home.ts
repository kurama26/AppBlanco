import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  labelUsuario: string = 'Usuario';
  labelClave: string = 'Clave';
  imgSrc: string = '../../assets/imgs/logo.png';
  imgAlt: string = 'logo ';

  usuario: string;
  clave: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  recuperarClave() {
    let recuperarClave = this.alertCtrl.create({
      title: 'Recuperar Credenciales',
      message: 'Por favor ingrese su correo electrónico de registro',
      inputs: [
        {
          name: 'correoElectronico',
          placeholder: 'correo electrónico'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Recuperar',
          handler: data => {
            this.mensajeConfirmacionRecuperacion(data.correoElectronico);
          }
        }
      ]
    });
    recuperarClave.present();
  }

  mensajeConfirmacionRecuperacion(email) {
    let mensajeConfirmacionRecuperacion = this.alertCtrl.create({
      title: 'Credenciales Enviadas',
      message: 'Siga las instrucciones las cuales fueron enviadas al correo electrónico: \n\n ' + email,
    });
    mensajeConfirmacionRecuperacion.present();
  }

  esValidoIniciarSesion() {
    return (this.usuario && this.clave) ? true : false;
  }

  iniciarSesion() {
    let iniciarSesion = this.alertCtrl.create({
      title: 'Mantenimiento',
      message: 'Por favor Intentelo mas tarde',
    });
    iniciarSesion.present();
  }

  paginaRegistro() {
    this.navCtrl.push(RegistroPage);
  }

}
