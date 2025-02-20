import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input('rating') rating: number = 0;
  @Input('starCount') starCount: number = 5;
  @Output() ratingUpdated = new EventEmitter();
  @Input() isReadOnly = false;

  ratingArr: number[] = [];

  ngOnInit() {
    for(let index = 0; index < this.starCount; index++){
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    this.rating = rating;
    
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return true;
    } else {
      return false;
    }
  }
}
