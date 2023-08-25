import styles from './DeleteAdminPage.module.scss'
import { IPaginationProducts, IProduct } from '@/interfaces/product.interface'
import productService from '@/services/products/product.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { InfoCard } from '@/components/ui/InfoCard/InfoCard'
import Loader from '@/components/ui/Loader/Loader'
import ProductCard from '@/components/ui/ProductCard/ProductCard'

export const DeleteAdminPage = () => {
	const { data: products, isLoading } = useQuery(
		['products'],
		() => productService.getAll(),
		{
			refetchOnWindowFocus: false,
			refetchInterval: 1000
		}
	)
	console.log(products?.data.products)
	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.wrapper}>
			<h2>Delete product</h2>
			<div className={styles.catalog}>
				{products?.data.products.map(product => (
					<InfoCard key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}
