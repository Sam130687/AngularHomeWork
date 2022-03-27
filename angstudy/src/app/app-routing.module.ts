import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/product-list/product-list.module').then((m) => m.ProductListModule),
	},
	{
		path: 'product',
		loadChildren: () => import('./pages/product-card/product-card.module').then((m) => m.ProductCardModule),
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
