import Logo from '../../../public/images/default.png'
import Cart from '../Cart/Cart'
import Input from '../Input/Input'
import style from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

const Header: FC = () => {
	const router = useRouter()
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<Link href={'/'}>Sharp</Link>
			</div>
			<div className={style.search}>
				<Input
					classNames={style.input}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							router.push(`/q?term=${e.currentTarget.value}`)
						}
					}}
				>
					Search
				</Input>
			</div>

			<div className={style.right_part}>
				<Cart />
			</div>
		</header>
	)
}

export default Header
