import Loader from '../Loader/Loader'
import styles from './InfoCard.module.scss'
import { IProduct } from '@/interfaces/product.interface'
import productService from '@/services/products/product.service'
import Router, { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

export const InfoCard: FC<IProduct> = ({ id, name, images }) => {
	const router = useRouter()
	const [isLoader, setIsLoader] = useState(true)
	isLoader && setTimeout(() => setIsLoader(false), 20000)
	return isLoader ? (
		<Loader />
	) : (
		<div
			className={styles.wrapper}
			onClick={() => {
				productService.delete(id)
                setIsLoader(true)
			}}
		>
			<div className={styles.contentWrapper}>
				<img src={images[0]} alt='' />
				<h5>{name}</h5>
			</div>
			<div className={styles.deleteButton}>
				<div className={styles.icon}>
					<RxCross1 size={30} color='white' />
				</div>
			</div>
		</div>
	)
}
