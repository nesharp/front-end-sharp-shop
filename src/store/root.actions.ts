import { cartSlice } from './cart/cart.slice'
import * as userActions from './user/user.actions'

const cartActions = cartSlice.actions
export const rootActions = {
	...userActions,
	...cartActions
}
