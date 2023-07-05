import styles from './Loader.module.scss'
import cn from 'classnames'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className={styles.pyramid_loader}>
			<div className={styles.wrapper}>
				<span className={cn(styles.side, styles.side1)}></span>
				<span className={cn(styles.side, styles.side2)}></span>
				<span className={cn(styles.side, styles.side3)}></span>
				<span className={cn(styles.side, styles.side4)}></span>
				<span className={styles.shadow}></span>
			</div>
		</div>
	)
}

export default Loader
