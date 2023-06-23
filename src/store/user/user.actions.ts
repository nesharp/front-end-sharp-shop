import { IAuthResponse, IEmailPassword } from "./user.interface";
import {createAsyncThunk} from '@reduxjs/toolkit'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
    'auth/register',
    async (data, thunkAPI) => {
        try {
            const response = authService.register(data);            
        }

    }
)