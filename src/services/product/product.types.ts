export interface IProductData {
	name: string
	description?: string
	price: number
	images?: string[]
	categoryId: number
}
export enum EnumProductSort {
	HIGHEST_PRICE = 'hight-price',
	LOWEST_PRICE = 'low-price',
	OLDEST = 'oldest',
	NEWEST = 'newest'
}
export type TypeDataFIlters = {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}
export interface IProductData {
	name: string
	description?: string
	price: number
	images?: string[]
	categoryId: number
}
