import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card.component';

const routes: Routes = [
	{
		path: ':id',
		component: ProductCardComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductCardRoutingModule {}
