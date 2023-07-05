import { IAuthResponse, ITokens } from '../../store/user/user.interface'
import Cookies from 'js-cookie'

const saveTokensStorage = (data: ITokens) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}
export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}
