import { ICategory } from '@/interfaces/category.interface'

import { instance } from '@/api/api.interceptor'

class CategoryService {
	async getAll() {
		return instance<ICategory[]>({
			url: '/category',
			method: 'GET'
		})
	}

	async getById(id: number | string) {
		return instance<ICategory>({
			url: `/category/${id}`,
			method: 'get'
		})
	}
	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `/category/slug/${slug}`,
			method: 'get'
		})
    }
    async create() {
        return instance<ICategory>({
            url: `/category`,
            method: 'post'
        })
    }
    async update( id: string | number, name: string) {
        return instance<ICategory>({
            url: `/category/${id}`,
            method: 'put',
            data: {name}
        })
    }   
    async delete( id: string | number) {
        return instance<ICategory>({
            url: `/category/${id}`,
            method: 'delete'
        })
    }   

	
}
export default new CategoryService()
