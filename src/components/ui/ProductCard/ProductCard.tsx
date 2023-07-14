import DarkButton from '../DarkButton/DarkButton'
import RatingLabel from '../RatingLabel/RatingLabel'
import styles from './ProductCard.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const ProductCard: FC<IProduct> = product => {
	const { id, name, description, price, images } = product
	const router = useRouter()
	const { items } = useCart()
	const { addToCart, removeFromCart } = useActions()
	const currentProduct = items.find(item => item.product.id === id)
	const toggleCart = () => {
		currentProduct
			? removeFromCart({ id: currentProduct.id })
			: addToCart({ product: product, quantity: 1, price })
		console.log(items)
	}
	const buyProduct = () => {
		router.push(`/products/${product.slug}`)
	}
	return (
		<div className={styles.cart}>
			<RatingLabel product={product} />
			<Image
				loader={() => images[0]}
				src={images[0]}
				alt={'asd'}
				width={200}
				height={200}
				className={styles.image}
			/>

			<h2>{name}</h2>
			<p>{description}</p>
			<h2>${price}</h2>
			<div className={styles.buttons}>
				<DarkButton
					type='button'
					size='small'
					className={styles.button1}
					onClick={toggleCart}
				>
					{!currentProduct ? 'Add to cart' : 'Remove'}
				</DarkButton>
				<DarkButton
					type='button'
					size='small'
					className={styles.button2}
					onClick={buyProduct}
				>
					View
				</DarkButton>
			</div>
		</div>
	)
}

export default ProductCard
