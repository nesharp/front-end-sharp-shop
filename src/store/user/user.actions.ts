import { IAuthResponse, IEmailPassword } from './user.interface'
import { removeFromStorage } from '@/services/auth/auth.helper'
import authService from '@/services/auth/auth.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { errorCatch } from '@/api/api.helper'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
<<<<<<< HEAD
			const response = await authService.main('register', data)
=======
			const response = authService.main('register', data)
>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
<<<<<<< HEAD
            const response = await authService.main('login', data)
=======
			const response = authService.main('login', data)
>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
<<<<<<< HEAD
export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})
=======

export const logout = createAsyncThunk('auth/logout', async () => {
	removeFromStorage()
})

>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			const response = await authService.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(error)
		}
	}
)
