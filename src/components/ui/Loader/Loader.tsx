import styles from './Loader.module.scss'
import cn from 'classnames'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
			<div className={styles.box}></div>
		</div>
	)
}

export default Loader
