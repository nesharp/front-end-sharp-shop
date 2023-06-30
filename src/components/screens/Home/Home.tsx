import { IProduct } from '@/interfaces/product.interface';
import { NextPage } from 'next';



import ProductCard from '@/components/ui/ProductCard/ProductCard';
import RatingLabel from '@/components/ui/RatingLabel/RatingLabel';
import { test } from 'node:test';


const testProduct: IProduct = {
	id: 1,
	name: 'Test Product',
	description: 'This is a test product',
	price: 100,
	images: ['https://cdn.newtime.ua/upload/2023-01/Qz8FKVrX0ea8iLa.webp'],
	slug: 'test-product',
	category: {
		id: 1,
		name: 'Test Category',
		slug: 'test-category'
	},
	createdAt: new Date(),
	reviews: [
		{
			id: 1,
			user: {
				id: 1,
				email: '',
				name: '',
				avatarPath: '',
				phone: ''
			},
			text: 'This is a test review',
			rating: 5,
			createdAt: ''
		}
	]
}

const Home: NextPage = () => {
	return <ProductCard {...testProduct} />
}

export default Home