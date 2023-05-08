import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private menu: MenuController) {}
  
  irParaMinhaPagina() {
    this.router.navigateByUrl('/minha-pagina');
  }
  irParaMinhaPaginaHome() {
    this.router.navigateByUrl('/home');
  }
  fecharMenu() {
    this.menu.close();
  }
  q4() {
    this.router.navigateByUrl('/q4');
  }
  
}
