import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-pagina',
  templateUrl: './minha-pagina.page.html',
  styleUrls: ['./minha-pagina.page.scss'],
})
export class MinhaPaginaPage implements OnInit {


  items = [
    { 
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcard-background&psig=AOvVaw2gO6mUEGuyzntNVNfVakDj&ust=1682728432208000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjw24iqy_4CFQAAAAAdAAAAABAE',
      title: 'Card 1',
      description: 'Descrição do Card 1',
      cbc:'aaaaaaaa'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcard-background&psig=AOvVaw2gO6mUEGuyzntNVNfVakDj&ust=1682728432208000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjw24iqy_4CFQAAAAAdAAAAABAE',
      title: 'Card 2',
      description: 'Descrição do Card 2',
      cbc:'aaaaaaaa'
    },
    {
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fcard-background&psig=AOvVaw2gO6mUEGuyzntNVNfVakDj&ust=1682728432208000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJjw24iqy_4CFQAAAAAdAAAAABAE',
      title: 'Card 3',
      description: 'Descrição do Card 3',
      cbc:'aaaaaaaa'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
