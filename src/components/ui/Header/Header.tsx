import Image from 'next/image'
import Logo from '../../../public/images/default.png'
import Cart from '../Cart/Cart'
import Input from '../Input/Input'
import style from './Header.module.scss'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<Link href={'/'}>Sharp</Link>
			</div>
			<div className={style.search}>
				<Input classNames={style.input}>Search</Input>
			</div>

			<div className={style.right_part}>
				<Cart />
				{/* <Link href={'/profile'}>
					<img src="" alt="Me" />
				</Link> */}
			</div>
		</header>
	)
}

export default Header
