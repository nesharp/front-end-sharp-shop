import Loader from '../Loader/Loader'
import styles from './CategoryDropDown.module.scss'
import { ICategory } from '@/interfaces/category.interface'
import categoryService from '@/services/category/category.service'
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { GetStaticProps } from 'next'
import { Dispatch, FC, SetStateAction } from 'react'

interface Props {
	categoryId: number
	setCategoryId: Dispatch<SetStateAction<number>>
	className?: string
}
export const CategoryDropDown: FC<Props> = ({
	setCategoryId,
	categoryId,
	className
}) => {
	const { data: categories, isLoading } = useQuery<ICategory[]>(
		['category'],
		categoryService.getAll
	)
	return isLoading ? (
		<Loader />
	) : (
		<select
			className={classNames(className && className, styles.select)}
			onChange={e => {
				setCategoryId(
					categories?.find(
						category => category.name === e.target.value
					)?.id || 0
				)
				console.log(
					categories?.find(
						category => category.name === e.target.value
					)
				)
			}}
		>
			{categories?.map(category => {
				return <option key={category.name}>{category.name}</option>
			})}
		</select>
	)
}
