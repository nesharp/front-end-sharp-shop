import { errorCatch, getContentType } from './api.helper'
import { getAccessToken, removeFromStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import axios from 'axios'
<<<<<<< HEAD

export const instance = axios.create({
	baseURL: process.env.SERVER_URL,
=======
import { config } from 'process'

const server_url = 'http://localhost:4200/api'
export const instance = axios.create({
	baseURL: server_url,
>>>>>>> new-brunch
	headers: getContentType()
})
instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()
<<<<<<< HEAD
	if (config.headers && accessToken) {
=======
	if (config && accessToken && config.headers) {
>>>>>>> new-brunch
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})
<<<<<<< HEAD

=======
>>>>>>> new-brunch
instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
<<<<<<< HEAD
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
        ) {
            
            originalRequest._isRetry = true
            try {
				await authService.getNewTokens()
                return instance.request(originalRequest)
            } catch (e) {
                if(errorCatch(error) === 'jwt expired') {
                    return Promise.reject(errorCatch(error))
                
					removeFromStorage()
                }
            }

		}
=======
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
>>>>>>> new-brunch
	}
)
