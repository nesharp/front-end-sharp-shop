import styles from './Product.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { NextPage } from 'next'
import { useState } from 'react'
import { MdDiscount } from 'react-icons/md'
import { Rating } from 'react-simple-star-rating'

import Carousel from '@/components/ui/Carousel/Carousel'
import DarkButton from '@/components/ui/DarkButton/DarkButton'
import NumberInput from '@/components/ui/NumberInput/NumberInput'
import ProductViewReviews from '@/components/ui/ProductViewReviews/ProductViewReviews'
import SimilarProducts from '@/components/ui/SimilarProducts/SimilarProducts'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

const ProductView: NextPage<IProduct> = ({
	id,
	name,
	description,
	price,
	reviews,
	images,
	...rest
}) => {
	const averageRating =
		reviews.reduce((acc, review) => {
			return acc + review.rating
		}, 0) / reviews.length
	const { items } = useCart()
	const [quantity, setQuantity] = useState(1)
	const product = {
		id,
		name,
		description,
		price,
		reviews,
		images,
		...rest
	} as IProduct
	const { addToCart, removeFromCart } = useActions()
	const currentProduct = items.find(item => item.product.id === id)
	const toggleCart = () => {
		currentProduct
			? removeFromCart({ id: currentProduct.id })
			: addToCart({ product, quantity, price })
	}
	return (
		<div className={styles.product__page}>
			<div className={styles.product_info}>
				<div className={styles.general_info}>
					<h2 className={styles.title}>{name}</h2>
					<Carousel images={images} />
					<div className={styles.panel}>
						<div className={styles.purchase__panel}>
							<div>
								<Rating
									initialValue={averageRating}
									size={20}
									readonly={true}
								/>
								<h3 className={styles.price}>${price}</h3>
							</div>
							<div className={styles.buttons}>
								<NumberInput
									number={quantity}
									setNumber={setQuantity}
									image={<MdDiscount size={15} />}
									className={styles.quantity}
								/>
								<DarkButton
									type='button'
									size='small'
									className={styles.button}
									onClick={toggleCart}
								>
									{!currentProduct ? 'Add to cart' : 'Remove'}
								</DarkButton>
							</div>
						</div>
					</div>
					<div className={styles.description}>
						<h3>Description</h3>
						<p>{description}</p>
					</div>
					<div className={styles.similar}>
						<h3>Similar products</h3>
						<SimilarProducts id={id} />
					</div>
				</div>
				<div className={styles.reviews}>
					<ProductViewReviews reviews={reviews} id={id} />
				</div>
			</div>
		</div>
	)
}

export default ProductView
