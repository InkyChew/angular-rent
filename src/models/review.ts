export interface IReview {
    id: number;
    username: string;
    content: string;
    createdAt: string;
    replies: IReview[];
}