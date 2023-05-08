import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.page.html',
  styleUrls: ['./q4.page.scss'],
})
export class Q4Page implements OnInit {
  buscar(event: any) {
    const termo = event.target.value;
    // Realizar a lógica de busca com o termo digitado
    console.log('Termo de busca:', termo);
  }
  constructor() { }

  ngOnInit() {
  }

}
