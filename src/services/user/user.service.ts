<<<<<<< HEAD
import { IUser } from '@/interfaces/user.interfaces'

import { instance } from '@/api/api.interceptor'
=======
import { instance } from "@/api/api.interceptor"
import { IUser } from "@/interfaces/user.interfaces"
>>>>>>> new-brunch

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

<<<<<<< HEAD
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
=======
class UserSerivce{
    async getProfile() {
        return instance<IUser>({
            url: '/user/profile',
            method: 'get'
        })
    }
    async updateProfile(data: TypeData) {
        return instance<IUser>({
            url: '/user/profile',
            method: 'put',
            data
        })
    }
}
export default new UserSerivce()
>>>>>>> new-brunch
