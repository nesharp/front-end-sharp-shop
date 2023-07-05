<<<<<<< HEAD
import { cartSlice } from './cart/cart.slice'
import * as userActions from './user/user.actions'

const cartActions = cartSlice.actions
export const rootActions = {
	...userActions,
	...cartActions
}
=======
import * as userActions from './user/user.actions';
export const rootActions = {
    ...userActions,
}
>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
