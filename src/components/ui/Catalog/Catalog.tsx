import Loader from '../Loader/Loader'
import ProductCard from '../ProductCard/ProductCard'
import style from './Catalog.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import { FC } from 'react'

interface ICatalogProps {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalogProps> = ({
	products,
	isLoading,
	title,
	isPagination = false,
}) => {
	isLoading && <Loader />
	return (
		<section className={style.section}>
			{title && <h1>{title}</h1>}
			<div className={style.products}>
				{products?.length > 0 ? (
					products.map(product => (
						<ProductCard key={product.id} {...product} />
					))
				) : (
					<Loader />
				)}
			</div>
		</section>
	)
}

export default Catalog
