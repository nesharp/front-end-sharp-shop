import { IUser } from '@/interfaces/user.interfaces'

import { instance } from '@/api/api.interceptor'

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

class UserService {
	async getProfile() {
		return instance<IUser>({
			url: '/users/profile',
			method: 'get'
		})
	}
	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: '/users/profile',
			method: 'put',
			data: data
		})
	}
}
export default new UserService()
