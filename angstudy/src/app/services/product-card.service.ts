import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';

@Injectable()
export class ProductCardService {
	constructor(private http: HttpClient) {}

	getProduct$(): Observable<IProduct> {
		return this.http.get<IProduct>('/product');
	}
}
