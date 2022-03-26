import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts$(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/products');
  }
}
