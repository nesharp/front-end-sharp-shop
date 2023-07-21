import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	return useTypedSelector(state => state.cart)
}
