import { IProduct } from '@/interfaces/product.interface'
import productService from '@/services/products/product.service'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import ProductView from '@/components/screens/Product/Product'
import Layout from '@/components/ui/Layout/Layout'
import Loader from '@/components/ui/Loader/Loader'

const ProductPage: NextPage = () => {
	const router = useRouter()
	const {
		data: response,
		isLoading,
		error
	} = useQuery(
		['product', router.query.slug],
		() => productService.getBySlug(router.query.slug as string),
		{
			refetchInterval: 5000
		}
	)
	const product = response?.data as IProduct
	return (
		<div>
			{error || isLoading ? <Loader /> : null}
			<Layout>{product ? <ProductView {...product} /> : ''}</Layout>
		</div>
	)
}

export default ProductPage
