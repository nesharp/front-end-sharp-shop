import { instance } from "@/api/api.interceptor"
import { IUser } from "@/interfaces/user.interfaces"

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

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