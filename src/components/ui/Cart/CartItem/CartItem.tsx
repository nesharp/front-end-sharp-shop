import style from './CartItem.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { FC } from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'

import { useActions } from '@/hooks/useActions'

interface ICartItemProps {
	product: IProduct
	price: number
	quantity: number
	id: number
}

const CartItem: FC<ICartItemProps> = ({ product, price, quantity, id }) => {
	const { changeQuantity, removeFromCart } = useActions()
	const addItems = () => {
		changeQuantity({ id: id, type: 'increase' })
	}
	const removeItems = () => {
		if (quantity === 1) {
			removeFromCart({ id })
		}
		quantity > 1 && changeQuantity({ id: id, type: 'decrease' })
	}
	return (
		<div className={style.item}>
			<p>{product.name}</p>
			<div className={style.input}>
				<AiOutlineMinusCircle
					onClick={() => {
						removeItems()
					}}
					style={{ cursor: 'pointer' }}
				/>
				<p>{quantity}</p>
				<AiOutlinePlusCircle
					style={{ cursor: 'pointer' }}
					onClick={() => {
						addItems()
					}}
				/>
			</div>
			<h4>${price}</h4>
		</div>
	)
}

export default CartItem
