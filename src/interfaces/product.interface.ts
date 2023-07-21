import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	category: ICategory
	createdAt: Date
	images: string[]
}
export interface IProductDetails {
	product: IProduct
}
export interface IProduct {
	products: IProduct[]
}
export interface IPaginationProducts {
	length: number
	products: IProduct[]
}
