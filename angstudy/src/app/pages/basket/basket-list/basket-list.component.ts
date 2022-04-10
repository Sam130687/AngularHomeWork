import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { IProduct } from '../../../interface/product';
import { BasketService } from '../../../services/basket.service';

// interface IProducts {
// 	prod: IProduct;
// 	count: number;
// }

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

	basket$: Observable<IProduct[]> = this.basketService.basket$;

	form = this.formBuilder.group({
		counters: this.formBuilder.array([]),
	});

	constructor(
      private basketService: BasketService,
      private formBuilder: FormBuilder,
    ) {}

// take(1), это говорит что один раз вызывается
  ngOnInit(): void {
    this.basket$.pipe(take(1)).subscribe(
      basket => {
        this.form.setControl(
          'counters',
          this.formBuilder.array(
            new Array(basket.length)
              .fill(1)
              .map((value, index) => [basket[index]?.count ? basket[index]?.count : value , [Validators.max(10), Validators.min(0)]]),
          ),
        );
      }
    );
    
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe((count)=>{
      this.basketService.updateCountInBasket(count.counters);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // getUnicProductsList(products : IProduct[]): IProducts[]{
  //   const _arr: IProducts[] = [];

  //   if (!products) {
  //     return _arr;
  //   }

  //   // const initialValue : IProduct = {};
  //   // const prodArray = products.reduce(function(acc, cur){
  //   //   acc[cur.id] = acc[cur.id] || {
  //   //     prod : cur,
  //   //     count : 0
  //   //   };
  //   //   acc[cur.id].count = acc[cur.id].count + 1;
  //   //   return acc;
  //   // }, initialValue);
  //   // _arr = Object.values(prodArray);
  //   // return _arr;

  //   products.forEach((item) => {
  //     let prodItem = _arr.find(elem => elem.prod.id == item.id);

  //     if ( !prodItem ){
  //       _arr.push({prod : item, count : 1});
  //     }
  //     else
  //     {
  //       prodItem.count++;
  //     }
  //   });

  //   return _arr;
  // } 

  // addProduct(product: IProduct) {
	// 	this.basketService.addProductToBasket(product).subscribe(error => console.log(error));
  //   this.changeDetactionRef.markForCheck();
  // }

  // dropProduct(product: IProduct) {
	// 	this.basketService.dropProductFromBasket(product).subscribe(error => console.log(error));
  //   this.changeDetactionRef.markForCheck();
  // }
}
