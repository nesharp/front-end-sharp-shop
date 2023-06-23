import { instance } from "@/api/api.interceptor"
import { IProduct } from "@/interfaces/product.interface"
import { IProductData, TypeDataFIlters } from "./product.interfaces"

class ProductSevice {
	async getAll(queryData = {} as TypeDataFIlters) {
		return instance<IProduct[]>({
			url: '/products',
			method: 'get',
			params: queryData
		})
	}
	async getSimilar(id: string | number) {
		return instance<IProduct[]>({
			url: `/products/similar/${id}`,
			method: 'get'
		})
	}
	getBySlug(slug: string) {
		return instance<IProduct>({
			url: `products/by-slug/${slug}`,
			method: 'get'
		})
	}
	getById(id: string | number) {
		return instance<IProduct>({
			url: `products/${id}`,
			method: 'get'
		})
	}
	getByCategory(category: string) {
		return instance<IProduct[]>({
			url: `products/category/${category}`,
			method: 'get'
		})
	}

	async create() {
		return instance<IProduct>({
			url: '/products',
			method: 'post'
		})
	}
	async update(id: string | number, data: IProductData) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'put',
			data: data
		})
	}
	async delete(id: string | number) {
		return instance<IProduct>({
			url: `/products/${id}`,
			method: 'delete'
		})
	}
}
export default new ProductSevice()