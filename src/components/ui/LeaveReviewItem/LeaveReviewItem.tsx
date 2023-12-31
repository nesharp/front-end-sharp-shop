import NumberInput from '../NumberInput/NumberInput'
import styles from './LeaveReviewItem.module.scss'
import reviewService from '@/services/review/review.service'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { AiFillStar, AiOutlineSend } from 'react-icons/ai'

import { useAuth } from '@/hooks/useAuth'

interface ILeaveReviewItem {
	id: string | number
}

const LeaveReviewItem: FC<ILeaveReviewItem> = ({ id: productId }) => {
	const [stars, setStars] = useState(1)
	const [review, setReview] = useState('')
	const router = useRouter()
	const { user } = useAuth()

	const leaveReview = async () => {
		!user && router.push('/auth')
		if (user) {
			const response = await reviewService.leave(productId, {
				rating: stars,
				text: review
			})
		}
		stars !== 1 && setStars(1)
		setReview('')
	}

	return (
		<div className={styles.review__input}>
			<div className={styles.review__input__header}>
				<NumberInput
					number={stars}
					setNumber={setStars}
					image={<AiFillStar size={20} />}
					limited={true}
				/>
				<button
					className={classNames(
						styles.button,
						!user && styles.disabled
					)}
					onClick={() => {
						leaveReview()
					}}
				>
					<AiOutlineSend size={25} className={styles.icon} />
				</button>
			</div>
			<textarea
				className={styles.review__textarea}
				value={review}
				onChange={e => {
					setReview(e.currentTarget.value)
				}}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						e.preventDefault()
						leaveReview()
					}
				}}
			/>
		</div>
	)
}

export default LeaveReviewItem
