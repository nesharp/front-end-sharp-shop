import { FC } from 'react'
import styles from './LeaveReviewItem.module.scss'
interface ILeaveReviewItem {}

const LeaveReviewItem: FC<ILeaveReviewItem> = ({}) => {
	return (
		<div className={styles.review__input}>
			<textarea
                className={styles.review__textarea}
            />
		</div>
	)
}

export default LeaveReviewItem
