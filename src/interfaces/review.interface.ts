import { IUser } from './user.interfaces';

export interface IReview {
    id: number
    user: IUser
    createdAt: string
    text: string
    rating: number
}
export interface IReviewDto {
    text: string
    rating: number
}