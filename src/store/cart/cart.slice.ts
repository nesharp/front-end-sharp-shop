import { ICartItem } from '@/interfaces/cart.interface'
import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as ICartItem[],
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload
            if (state[id]) {
                state[id] += quantity
            } else {
                state[id] = quantity
            }
        }
    }
})