import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/product';
import { ProductCardService } from 'src/app/services/product-card.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  productCard$!: Observable<IProduct>;	

	constructor(
		private productCardService: ProductCardService
		) {}

	ngOnInit() {
		this.productCard$ = this.productCardService.getProduct$();
	}

}
