import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {
  selectedRating = 0;

  @Input() totalFeedBack: number = 0;

  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }
  ];

  constructor() {}
  ngOnInit(): void {
  }

  selectStar(value: number): void{
    // prevent multiple selection
    this.stars.filter( (star) => {
      if ( star.id <= value){
        star.class = 'star-gold star';
      }else{
        star.class = 'star-gray star';
      }
      return star;
    });

    if (this.selectedRating === 0) {
      this.totalFeedBack++;
    }
    this.selectedRating = value;    
  }
}