import { Component } from '@angular/core';
import { PrincipalPage, AjustesPage } from '../index.paginas';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * @author Luis Alberto García Rodríguez
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  constructor() {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
  }

  tab1:any;
  tab2:any;  
}
