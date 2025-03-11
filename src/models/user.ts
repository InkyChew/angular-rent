import { IReview } from "./review";
import { IProperty } from "./room"

export class User {
    id: number = 0;
    name: string = '';
    email: string = '';
}

export class Landloard extends User {
    houses: IProperty[] = [];
    reviews: IReview[] = [];
}

export class Tenant extends User {
    reviews: IReview[] = [];
}