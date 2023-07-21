import Cart from '../Cart/Cart'
import Input from '../Input/Input'
import style from './Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

const Header: FC = () => {
	const router = useRouter()
	const { items } = useTypedSelector(state => state.cart)
	const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			router.push(`/q?term=${e.currentTarget.value}`)
		}
	}

	return (
		<header className={style.header}>
			<div className={style.logo}>
				<Link href={'/'}>Sharp</Link>
			</div>
			<div className={style.search}>
				<Input classNames={style.input} onKeyDown={e => search(e)}>
					Search
				</Input>
			</div>

			<div className={style.right_part}>
				<Cart />
				{items.length > 0 ? (
					<div className={style.quantity}></div>
				) : null}
			</div>
		</header>
	)
}

export default Header
