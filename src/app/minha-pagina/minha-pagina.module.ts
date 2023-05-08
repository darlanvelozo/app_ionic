import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaPaginaPageRoutingModule } from './minha-pagina-routing.module';

import { MinhaPaginaPage } from './minha-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaPaginaPageRoutingModule
  ],
  declarations: [MinhaPaginaPage]
})
export class MinhaPaginaPageModule {}
