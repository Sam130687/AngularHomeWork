import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  storeName:string = 'Мой магазинчик на коленке';
  basketNum:number = 0;
  totalFeedBack: number=0;
  price: number=100;
  describe: string = "Просто прекрасный Пес!";
  image: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  public orderGood(){
    this.basketNum++;
  }
}
