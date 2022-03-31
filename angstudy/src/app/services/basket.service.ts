import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
	constructor(private http: HttpClient) {}

	get basket$(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>('/basket');
	}

	addProductToBasket(product: IProduct):Observable<any> {
		const body = {product: product, action : 'add' };
		return this.http.post('/basket/' + product.id, body);
	}

	dropProductFromBasket(product: IProduct):Observable<any> {
		return this.http.delete('/basket/'+product.id);
	}
}
