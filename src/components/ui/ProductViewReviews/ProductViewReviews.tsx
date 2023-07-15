import LeaveReviewItem from '../LeaveReviewItem/LeaveReviewItem'
import ReviewItem from '../ReviewItem/ReviewItem'
import styles from './ProductViewReviews.module.scss'
import { IReview } from '@/interfaces/review.interface'
import { FC } from 'react'

interface IProductViewReviews {}

const ProductViewReviews: FC<IReview[]> = reviews => {
	return (
		<div className={styles.reviews}>
			<h3 className={styles.heading}>Reviews</h3>
			<LeaveReviewItem />
			{Object.keys(reviews).map(key => (
				<ReviewItem {...reviews[+key]} key={key}/>
			))}
		</div>
	)
}

export default ProductViewReviews
