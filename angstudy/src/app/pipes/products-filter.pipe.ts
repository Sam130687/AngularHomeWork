import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interface/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

	transform(products: IProduct[], searchName: string): IProduct[] {
		return products.filter(({ name }) => name.includes(searchName));
	}  
}
