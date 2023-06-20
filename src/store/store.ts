import { carouselSlice } from './carousel/carousel.slice';
import { cartSlice } from './cart/cart.slice';
import { ICartItem } from '@/interfaces/cart.interface';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { TsConfigSourceFile } from 'typescript';


const persistConfig = {
	key: 'sharp-shop',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
})
export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>