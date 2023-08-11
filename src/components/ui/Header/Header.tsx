import Cart from '../Cart/Cart'
import Input from '../Input/Input'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const Header: FC = () => {
	const router = useRouter()
	const { items } = useTypedSelector(state => state.cart)
	const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			router.push(`/q?term=${e.currentTarget.value}`)
		}
	}
	const { user } = useAuth()
	
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href={'/'}>Sharp</Link>
			</div>
			<div className={styles.search}>
				<Input classNames={styles.input} onKeyDown={e => search(e)}>
					Search
				</Input>
			</div>

			<div className={styles.right_part}>
				<div className={styles.cart}>
					<Cart />
					{items.length > 0 ? (
						<div className={styles.quantity}></div>
					) : null}
				</div>
				<div className={styles.avatar}>
					<Link href={user ? '/profile' : '/auth'}>
						<img
							src={
								user
									? user.avatarPath
									: 'https://th.bing.com/th/id/OIP.o7iZsPVke-HeJIggV1BwYgHaHa?pid=ImgDet&rs=1'
							}
						/>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
