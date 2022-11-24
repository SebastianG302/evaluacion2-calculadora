import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  termino: string = '';

  constructor() {}

  add(numero: string){
    this.termino += numero;
  }
  borrar(){
    this.termino = '';
  }
  operar(){
    this.termino = eval(this.termino);
    
  }
  
}
