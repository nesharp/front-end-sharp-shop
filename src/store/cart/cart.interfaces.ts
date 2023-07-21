import { ICartItem } from '@/interfaces/cart.interface'

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}
export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'increase' | 'decrease'
}
export interface ICartInitialState {
	items: ICartItem[]
}
