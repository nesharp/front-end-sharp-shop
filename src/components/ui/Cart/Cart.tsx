import style from './Cart.module.scss'
import { FC, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import CartItem from './CartItem/CartItem'

const Cart: FC = () => {
	const [openState, setOpenState] = useState<boolean>(false)
	const openCart = () => {
		setOpenState(!openState)
	}
    const { items } = useTypedSelector(state => state.cart)
    
	return (
		<div className={style.cart}>
			<AiOutlineShoppingCart
				size={28}
				className={style.icon}
				onClick={openCart}
			/>

			{openState && (
				<div className={style.cartItems}>
					{items.map(item => (
						<CartItem
                            key={item.product.id}
                            product={item.product}
                            price={item.price}
                            quantity={item.quantity}
                            id={item.id}
					/>))}
				</div>
			)}
		</div>
	)
}

export default Cart
