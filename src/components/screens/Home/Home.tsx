import { IPaginationProducts, IProduct } from '@/interfaces/product.interface'
import { NextPage } from 'next'

import Catalog from '@/components/ui/Catalog/Catalog'
import Layout from '@/components/ui/Layout/Layout'

const Home: NextPage<IPaginationProducts> = ({ products, length }) => {
	return (
		<Layout>
			<Catalog products={products} title='Products' />
		</Layout>
	)
}

export default Home
