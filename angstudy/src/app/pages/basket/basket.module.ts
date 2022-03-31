import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BasketListComponent } from './basket-list/basket-list.component';
import { AddressComponent } from './address/address.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BasketComponent,
    BasketListComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule, 
    MatButtonModule, 
    MatListModule,
    MatCardModule,
  ]
})
export class BasketModule { }
