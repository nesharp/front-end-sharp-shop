import { ICategory } from '@/interfaces/category.interface'

import { instance } from '@/api/api.interceptor'

<<<<<<< HEAD
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
=======
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
>>>>>>> new-brunch
		})
	}
	async getBySlug(slug: string) {
		return instance<ICategory>({
			url: `/category/slug/${slug}`,
<<<<<<< HEAD
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
=======
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
>>>>>>> new-brunch
