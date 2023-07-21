import { IPaginationProducts, IProduct } from '@/interfaces/product.interface'
import productService from '@/services/products/product.service'
import { GetStaticProps, NextPage } from 'next'
import Home from '@/components/screens/Home/Home'
import { EnumProductSort } from '@/services/products/product.interfaces'
import { useState } from 'react'
const HomePage: NextPage<IPaginationProducts> = ({ products, length }) => {
  const [sortItem, setSortItem] = useState(EnumProductSort.NEWEST)
	return <Home products={products} length={length} />
}
export const getStaticProps: GetStaticProps<IPaginationProducts> = async () => {
  const { data } = await productService.getAll();
  return {
    props: data,
  };
}
export default HomePage
