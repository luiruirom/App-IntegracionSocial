import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditosPageRoutingModule } from './creditos-routing.module';

import { CreditosPage } from './creditos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreditosPage]
})
export class CreditosPageModule {}
