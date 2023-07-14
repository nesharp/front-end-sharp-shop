import { IProduct } from '@/interfaces/product.interface'
import productService from '@/services/products/product.service';
import { GetStaticPaths, NextPage } from 'next'

const ProductPage: NextPage<{ product: IProduct; slug: string }> = ({
	product,
	slug
}) => {
	return <div>Hello product</div>
}
// export const getStaticPaths: GetStaticPaths = () => {
//     const products = await productService.getAll()
//     const slugs = products.map()
//     return {paths: "", fallback: "blocking"}
// }
export default ProductPage
