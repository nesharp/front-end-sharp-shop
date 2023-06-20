import { saveToStorage } from './auth.helper'
import axios from 'axios'
import Cookies from 'js-cookie'
import { headers } from 'next/dist/client/components/headers'

import {
	IAuthResponse,
	IEmailPassword,
	ITokens
} from '@/store/user/user.interface'

import { getContentType } from '@/api/api.helper'
import { instance } from '@/api/api.interceptor'

class authService {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken)
			saveToStorage(response.data)
		return response.data
	}

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + '/auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) saveToStorage(response.data)
		return response
	}
}
export default new authService()
