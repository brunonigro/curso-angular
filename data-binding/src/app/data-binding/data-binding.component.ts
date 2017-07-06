import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  // Variables
  url = 'http://angular.io';
  cursoAngular = true;
  urlImage = 'http://lorempixel.com/400/200/';

  valorAtual = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = 'bitcoin';

  pessoa: any = {
    nome: 'Bruno',
    idade: 34
  }


  // Methods
  getValor() {
    return 1;
  }
  getCurtirCurso() {
    return true;
  }

  // Methods: Event Binding
  btnClicked() {
    console.log('OLAR!');
  }
  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
