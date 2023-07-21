import { ICartItem } from './cart.interface'
import { IUser } from './user.interfaces'

export enum EnumOrderStatus {
	PENDING = 'pending',
	PAYED = 'payed',
	SNIPPED = 'snipped',
	DELIVERED = 'delivered'
}
export interface IOrder {
	id: number
	createdAt: string
	items: ICartItem[]
	status: EnumOrderStatus
	user: IUser
}
