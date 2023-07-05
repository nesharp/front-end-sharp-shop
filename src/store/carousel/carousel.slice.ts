import { createSlice } from '@reduxjs/toolkit'
export const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
    },
    reducers: {
        setCarousel: (state, action) => {
            state = action.payload
        }
    }
})
