import styles from './Product.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { NextPage } from 'next'

import ProductViewReviews from '@/components/ui/ProductViewReviews/ProductViewReviews'

const ProductView: NextPage<IProduct> = ({
	id,
	name,
	description,
	price,
	reviews,
	images
}) => {
	return (
		<div className={styles.product__page}>
			<div className={styles.product_info}>
				<div className={styles.general_info}>
					<h2 className={styles.title}>{name}</h2>
					<div className={styles.slider}></div>
				</div>
				<div className={styles.reviews}>
					<ProductViewReviews reviews={reviews} id={id} />
				</div>
			</div>
		</div>
	)
}

export default ProductView
