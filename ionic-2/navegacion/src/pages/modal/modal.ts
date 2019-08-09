import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author Luis Alberto García Rodríguez
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log( this.nombre, this.edad );
  }

  cerrar_modal_con_parametros(){
    //Objeto para enviar com parametros
    let data = {
      nombre: "Juan",
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    };

    this.viewCtrl.dismiss( data );
  }

  cerrar_modal_sin_parametros(){
    this.viewCtrl.dismiss();
  }

}
