import { IPage } from '../../../../pages/admin'
import styles from './AdminHeader.module.scss'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'

interface AdminHeaderProps {
	setCurrentPage: Dispatch<SetStateAction<IPage>>
	page: IPage
}
export const AdminHeader: FC<AdminHeaderProps> = ({ page, setCurrentPage }) => {
	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => {
					setCurrentPage({ page: 'add' })
				}}
				className={styles.btn}
			>
				Add
			</button>
			<button
				onClick={() => {
					setCurrentPage({ page: 'delete' })
				}}
				className={styles.btn}
			>
				Delete
			</button>
			<button
				onClick={() => {
					setCurrentPage({ page: 'edit' })
				}}
				className={styles.btn}
			>
				Edit
			</button>
		</div>
	)
}
