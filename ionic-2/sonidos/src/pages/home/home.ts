import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor() {
    this.animales = ANIMALES.slice(0);
  }

  // Funcion para reproducir audio desde los botones del home
  reproducir( animal:Animal ){
    
    this.pausar_audio( animal );

    if ( animal.reproduciendo == true) {
      animal.reproduciendo = false;
      // console.log('audio pausado');
      return;
    }

    // console.log( animal );

    // let audio = new Audio();
    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();

    animal.reproduciendo = true;

    this.audioTiempo = setTimeout( ()=> animal.reproduciendo = false, animal.duracion * 1000 );
  }

  private pausar_audio( animalSel:Animal ){
    clearTimeout ( this.audioTiempo );

    this.audio.pause();
    this.audio.currentTime = 0;

    for( let animal of this.animales ){
      if ( animal.nombre != animalSel.nombre ) {
        animal.reproduciendo = false;
      }
    }
  }

  public borrar_animal( idx:number){
    this.animales.splice( idx, 1 );
  }

  public recargar_animales( refresher:any ){
    console.log('inicio del refresh');

    setTimeout( ()=>{
      this.animales = ANIMALES.slice(0);
      console.log('Termino el refresh');

      refresher.complete();
    }, 1500);
  }
}
