import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.less']
})
export class ShopCardComponent implements OnInit {
  @Input() price: number = 0;
  @Input() describe: string = "";
  @Input() image: string = "";
  @Output() public orderGood = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  putOnBusket(element: Event){
    if ((element.target as HTMLInputElement).nodeName == 'IMG'){
        this.orderGood.emit();
    }
  }

}
