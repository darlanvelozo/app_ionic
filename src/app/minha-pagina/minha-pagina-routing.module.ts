import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhaPaginaPage } from './minha-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: MinhaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhaPaginaPageRoutingModule {}
