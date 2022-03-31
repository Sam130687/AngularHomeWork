import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'products-list',
		loadChildren: () =>
			import('./pages/product-list/product-list.module').then((m) => m.ProductListModule),
	},
	{
		path: 'product',
		loadChildren: () =>
			import('./pages/product-card/product-card.module').then((m) => m.ProductCardModule),
	},
	{
		path: 'basket',
		loadChildren: () => import('./pages/basket/basket.module').then((m) => m.BasketModule),
	},
	{
		path: '',
		redirectTo: '/products-list',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: NotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
