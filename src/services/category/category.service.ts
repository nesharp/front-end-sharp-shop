import { ICategory } from '@/interfaces/category.interface'

import { instance } from '@/api/api.interceptor'

class CategorySerivce {
	async getAll() {
		const response = await instance<ICategory[]>({
			url: '/category',
			method: 'GET'
		})
		return response.data
	}

	async getById(id: string | number) {
		return instance<ICategory>({
			url: `/category/${id}`,
			method: 'GET'
		})
	}
	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `/category/slug/${slug}`,
			method: 'GET'
		})
	}
	async create() {
		return instance<ICategory>({
			url: '/category',
			method: 'POST'
		})
	}
	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `/category/${id}`,
			method: 'PUT',
			data: { name }
		})
	}
	async delete(id: string | number) {
		return instance<ICategory>({
			url: `/category/${id}`,
			method: 'DELETE'
		})
	}
}
export default new CategorySerivce()
