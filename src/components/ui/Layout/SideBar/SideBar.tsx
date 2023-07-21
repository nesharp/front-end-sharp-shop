import styles from './SideBar.module.scss'
import categoryService from '@/services/category/category.service'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

const SideBar: FC<{ className: string }> = ({ className }) => {
	const { data, error, isLoading } = useQuery(
		['categories'],
		categoryService.getAll
	)
	return (
		<div className={cn(className, styles.sidebar)}>
			<h4>Categories:</h4>
			{isLoading && <p>Loading...</p>}
			<div className={styles.categories}>
				{data?.map(category =>
					category.name ? (
						<p key={category.id}>
							<Link href={`/category/${category.slug}`}>
								{category.name}
							</Link>
						</p>
					) : (
						''
					)
				)}
			</div>
		</div>
	)
}

export default SideBar
