import { Component, inject, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { IReview } from '../../models/review';
import { ReviewService } from '../../services/review.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-review',
  imports: [MatExpansionModule, MatCardModule, NgTemplateOutlet],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

  private _service = inject(ReviewService);
  @Input() reviews: IReview[] = [];

  ngOnInit() {
    this.reviews = this._service.reviews;
  }
}

