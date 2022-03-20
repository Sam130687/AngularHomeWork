import { Component, EventEmitter,	Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCardComponent {
  @Input() public product: IProduct = {} as IProduct;
	@Output() public orderGood = new EventEmitter();

  constructor() { }
}
