import { cartSlice } from './cart/cart.slice'
import storage from './persist-storage'
import { userSlice } from './user/user.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	user: userSlice.reducer
})
const persistConfig = {
	key: 'sharp-shop',
	storage,
	whitelist: ['cart', 'user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			// serializableCheck: {
			// 	ignoredActions: [
			// 		FLUSH,
			// 		REHYDRATE,
			// 		PAUSE,
			// 		PERSIST,
			// 		PURGE,
			// 		REGISTER
			// 	]
			// }
			serializableCheck: false
		})
})
export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
