import styles from './ReviewItem.module.scss'
import { IReview } from '@/interfaces/review.interface'
import { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'

const ReviewItem: FC<IReview> = ({ id, text, user, rating, createdAt }) => {
	return (
		<div key={id} className={styles.item}>
			<div className={styles.info}>
				<p className={styles.name}>{user.name}</p>
				<p className={styles.date}>{createdAt.split('T')[0]}</p>
				<div className={styles.rating}>
					<p>{rating}</p>
					<AiFillStar className={styles.star} />
				</div>
			</div>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default ReviewItem
