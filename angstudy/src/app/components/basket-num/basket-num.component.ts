import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-num',
  templateUrl: './basket-num.component.html',
  styleUrls: ['./basket-num.component.less']
})
export class BasketNumComponent implements OnInit {
  @Input() basketNum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
