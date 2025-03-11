import { User } from "./user";

export interface IReview {
    id: number;
    user: User;
    startAt: Date;
    endAt: Date;
    content: string;
    rate: number;
    createdAt: string;
    replies: IReview[];
}