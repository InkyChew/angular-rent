import { User } from "./user";

export interface IReview {
    id: number;
    user: User;
    startAt: string;
    endAt: string;
    content: string;
    rate: number;
    createdAt: string;
    replies: IReview[];
}