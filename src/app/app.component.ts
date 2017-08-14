import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: string;
  password: string;

  lancamentos: Array<{ id: number, name: string, value: number, selected?: boolean }>;
  subtotal: number;

  constructor() {
    this.subtotal = 0;
    this.lancamentos = [];
    this.lancamentos.push({id: 1, name: 'Diária', value: 300.0});
    this.lancamentos.push({id: 2, name: 'Bar', value: 4500.0});
    this.lancamentos.push({id: 3, name: 'Diária', value: 300.0});
    this.lancamentos.push({id: 4, name: 'Diária', value: 300.0});
  }

  onSubmit() {
    console.log('user ', this.user, ' password ', this.password);
  }

  calculate() {
    let selecionados = [];

    for (let lancamento of this.lancamentos) {
      if (lancamento.selected) {

      }
    }


  }

}
