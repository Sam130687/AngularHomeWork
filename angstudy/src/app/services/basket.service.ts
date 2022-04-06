import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../interface/product';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
	//constructor(private http: HttpClient) {}

	private _basket$ = new BehaviorSubject<IProduct[]>([]);

	get basket$(): Observable<IProduct[]> {
		return this._basket$.asObservable();
	}

	addProductToBasket(product: IProduct) {
		this._basket$.next([...this._basket$.value, product]);
	}

	updateCountInBasket(counter: []) {
		// console.log(counter);
		//  const _basket = this._basket$.value.map((value, index)=>{
		// 	const val = value;
		// 	val.count = counter[index];
		// 	return val;
		// });
        // console.log(_basket);

		// this._basket$.next([..._basket]);
		const basket = this._basket$.value.map((value, index) => ({
			...value,
			count: counter[index],
		}))

		console.log(basket);

		this._basket$.next(basket);
	}

	// get basket$(): Observable<IProduct[]> {
	// 	return this.http.get<IProduct[]>('/basket');
	// }

	// addProductToBasket(product: IProduct):Observable<any> {
	// 	const body = {product: product, action : 'add' };
	// 	return this.http.post('/basket/' + product.id, body);
	// }

	// dropProductFromBasket(product: IProduct):Observable<any> {
	// 	return this.http.delete('/basket/'+product.id);
	// }
}
