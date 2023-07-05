import { IAuthResponse, ITokens } from '../../store/user/user.interface'
import Cookies from 'js-cookie'

<<<<<<< HEAD
export const seveTokensStorage = (data: ITokens) => {
=======
const saveTokensStorage = (data: ITokens) => {
>>>>>>> new-brunch
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}
export const saveToStorage = (data: IAuthResponse) => {
<<<<<<< HEAD
	saveToStorage(data)
=======
	saveTokensStorage(data)
>>>>>>> new-brunch
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

const getUserFromStorage = () => {
<<<<<<< HEAD
	return JSON.parse(localStorage.getItem('user') || '{}' )  
}
=======
	return JSON.parse(localStorage.getItem('user') || '{}')
}
>>>>>>> new-brunch
