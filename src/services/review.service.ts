import { Injectable } from '@angular/core';
import { IReview } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews: IReview[] = [
    {
      id: 1,
      username: 'John Doe',
      content: 'This is a great product!',
      createdAt: '2025-03-10',
      replies: [
        {
          id: 2,
          username: 'Jane Smith',
          content: 'I agree, it\'s really useful!',
          createdAt: '2025-03-11',
          replies: [
            {
              id: 4,
              username: 'Mark Chen',
              content: 'Thanks guy.',
              createdAt: '2025-03-12',
              replies: [],
            },
          ],
        },
        {
          id: 4,
          username: 'Inky Chew',
          content: 'Wow.',
          createdAt: '2025-03-12',
          replies: [],
        },
      ],
    },
    {
      id: 3,
      username: 'Alice Johnson',
      content: 'I didn\'t like this product at all.',
      createdAt: '2025-03-09',
      replies: [],
    },
  ];

  constructor() { }

  getReviews() {
    return this.reviews;
  }
}
