import { ICategory } from '@/interfaces/category.interface'
import { IProduct } from '@/interfaces/product.interface'
import categoryService from '@/services/category/category.service'
import productService from '@/services/products/product.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/Catalog/Catalog'
import Layout from '@/components/ui/Layout/Layout'
import Meta from '@/components/ui/Meta'

interface ICategoryPageProps {
	products: IProduct[]
	category: ICategory
}
const CategoryPage: NextPage<ICategoryPageProps> = ({ products, category }) => {
	return (
		<Meta title={category.name}>
			<Layout>
				<Catalog products={products} title={category.name} />
			</Layout>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await categoryService.getAll()
	const paths = categories.map(category => ({
		params: { category: category.slug }
	}))
	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: products } = await productService.getByCategory(
		(params?.category as string) || ''
	)
	const { data: category } = await categoryService.getBySlug(
		(params?.category as string) || ''
	)
	return {
		props: { products, category }
	}
}

export default CategoryPage
