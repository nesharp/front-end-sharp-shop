import ProductCard from '../ProductCard/ProductCard'
import styles from './SimilarProducts.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import productService from '@/services/products/product.service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

const SimilarProducts: FC<{ id: string | number }> = ({ id }) => {
	const { data: response, isLoading } = useQuery<any, IProduct[]>(
		['similarProducts', id],
		() => productService.getSimilar(id)
	)
	return (
		<div className={styles.wrapper}>
			{response?.data &&
				response.data.map((product: IProduct) => (
					<ProductCard key={product.id} {...product} />
				))}
		</div>
	)
}

export default SimilarProducts
