import NumberInput from '../NumberInput/NumberInput'
import styles from './LeaveReviewItem.module.scss'
import { FC } from 'react'

interface ILeaveReviewItem {}

const LeaveReviewItem: FC<ILeaveReviewItem> = ({}) => {
	return (
		<div className={styles.review__input}>
			<div className={styles.review__input__header}>
				<NumberInput />
				<input type="button" value={">"} />
			</div>
			<textarea className={styles.review__textarea} />
		</div>
	)
}

export default LeaveReviewItem
