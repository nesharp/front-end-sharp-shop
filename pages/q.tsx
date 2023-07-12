import productService from '@/services/products/product.service'
import { useQueries, useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Catalog from '@/components/ui/Catalog/Catalog'
import Layout from '@/components/ui/Layout/Layout'
import Meta from '@/components/ui/Meta'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	const { data: products } = useQuery(['search'], () =>
		productService.getAll({
			perPage: 8,
			page: 1,
			searchTerm: query.term as string
		})
	)
	return (
		<Meta title='Search' description='Search'>
			<Layout>
				<Catalog
					products={products ? products.data.products : []}
					title={`Search results for ${query.term as string}`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
