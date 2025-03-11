import { Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';

export const routes: Routes = [
    { path: '', component: ReviewComponent, pathMatch: 'full' }
];
