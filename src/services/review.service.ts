import { Injectable } from '@angular/core';
import { IReview } from '../models/review';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews: IReview[] = [
    {
      id: 1,
      user: { ...new User(), name: 'John Doe' },
      startAt: new Date(),
      endAt: new Date(),
      content: 'This is a great product!',
      rate: 4,
      createdAt: '2025-03-10',
      replies: [
        {
          id: 2,
          user: { ...new User(), name: 'Jane Smith' },
          startAt: new Date(),
          endAt: new Date(),
          content: 'I agree, it\'s really useful!',
          rate: 1,
          createdAt: '2025-03-11',
          replies: [
            {
              id: 4,
              user: { ...new User(), name: 'Mark Chen' },
              startAt: new Date(),
              endAt: new Date(),
              content: 'Thanks guy.',
              rate: 5,
              createdAt: '2025-03-12',
              replies: [],
            },
          ],
        },
        {
          id: 4,
          user: { ...new User(), name: 'Inky Chew' },
          startAt: new Date(),
          endAt: new Date(),
          content: 'Wow.',
          rate: 3.5,
          createdAt: '2025-03-12',
          replies: [],
        },
      ],
    },
    {
      id: 3,
      user: { ...new User(), name: 'Alice Johnson' },
      startAt: new Date(),
      endAt: new Date(),
      content: 'I didn\'t like this product at all.',
      rate: 2,
      createdAt: '2025-03-09',
      replies: [],
    },
  ];

  constructor() { }

  getReviews() {
    return this.reviews;
  }
}
