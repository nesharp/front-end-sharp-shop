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