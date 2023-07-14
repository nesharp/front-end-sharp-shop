import { errorCatch, getContentType } from './api.helper';
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper';
import authService from '@/services/auth/auth.service';
import axios from 'axios';
import { config } from 'process';


const server_url =
	'http://ec2-16-170-219-154.eu-north-1.compute.amazonaws.com/api'
export const instance = axios.create({
	baseURL: server_url,
	headers: getContentType()
})
instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()
	if (config && accessToken && config.headers) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})
instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return instance(originalRequest)
			} catch (error) {
				if(errorCatch(error) === 'jwt expired') {
					removeFromStorage()
				}	
			}
		}
		throw error
	}
)