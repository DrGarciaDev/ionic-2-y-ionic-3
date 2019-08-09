import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author Luis Alberto García Rodríguez
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  activar_principal(){
    this.navCtrl.parent.select(2);
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create( ModalPage, { nombre:"Luis", edad:30 } );
    
    modal.present();

    modal.onDidDismiss( parametros => {

      if ( parametros ) {
        console.log("Datos recibidos del modal:");
        console.log( parametros );        
      }
      else{
        console.log("Se cerró sin parámetros...");
      }

    } );
  
  }

}
