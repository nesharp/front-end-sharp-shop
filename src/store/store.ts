<<<<<<< HEAD
import { carouselSlice } from './carousel/carousel.slice';
import { cartSlice } from './cart/cart.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user/user.slice';


const persistConfig = {
	key: 'sharp-shop',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer,
	user: userSlice.reducer
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
=======
import { cartSlice } from "./cart/cart.slice";
import { userSlice } from "./user/user.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from './persist-storage'

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    user: userSlice.reducer
});
const persistConfig = {
    key: 'sharp-shop',
    storage,
    whitelist: ['cart']
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


>>>>>>> new-brunch
export type TypeRootState = ReturnType<typeof rootReducer>