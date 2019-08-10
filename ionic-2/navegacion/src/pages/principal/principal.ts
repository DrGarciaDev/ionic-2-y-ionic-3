import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { Pagina2Page } from '../index.paginas';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author Luis Alberto García Rodríguez
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  // Crea una variable de tipo any
  pagina2:any = Pagina2Page;

  navegar_pagina(){
    this.navCtrl.push( Pagina2Page );
  }

  mostrar_menu(){
    this.menuCtrl.toggle();
  }

}
