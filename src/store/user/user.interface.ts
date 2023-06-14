// import {IUser} from "../../models/user.interface";

export interface IUserState {
    email: string
}
export interface ITokens {
    accessToken: string
    refreshToken: string
}
export interface IInitialState {
    user: IUserState | null
    isLoading: boolean
}
export interface IEmailPassword {
    email: string
    password: string
}
export interface IAuthResponse {
    user: IUser & {
        isAdmin: boolean
    }
}
