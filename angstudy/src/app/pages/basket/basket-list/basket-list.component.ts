import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../interface/product';
import { BasketService } from '../../../services/basket.service';

interface IProducts {
	prod: IProduct;
	count: number;
}

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketListComponent {

	basket$: Observable<IProduct[]> = this.basketService.basket$;

	constructor(
      private basketService: BasketService,
      private changeDetactionRef: ChangeDetectorRef
    ) {}

  getUnicProductsList(products : IProduct[]): IProducts[]{
    let _arr: IProducts[] = [];

    if (!products) {
      return _arr;
    }

    products.forEach((item) => {
      let prodItem = _arr.find(elem => elem.prod.id == item.id);

      if ( !prodItem ){
        _arr.push({prod : item, count : 1});
      }
      else
      {
        prodItem.count++;
      }
    });

    return _arr;
  } 

  addProduct(product: IProduct) {
		this.basketService.addProductToBasket(product).subscribe(error => console.log(error));
    this.changeDetactionRef.markForCheck();
  }

  dropProduct(product: IProduct) {
		this.basketService.dropProductFromBasket(product).subscribe(error => console.log(error));
    this.changeDetactionRef.markForCheck();
  }
}
