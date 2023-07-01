import Cart from '../Cart/Cart'
import Input from '../Input/Input'
import style from './Header.module.scss'
import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}><Link href={'/'}>Sharp</Link></div>
			<div className={style.search}>
				<Input classNames={style.input}>Search</Input>
			</div>
			{/* <nav className={style.nav}>
				<Link href={'/'}>Home</Link>
				<Link href={'/'}>Home</Link>
				<Link href={'/'}>Home</Link>
				<Link href={'/'}>Home</Link>
			</nav> */}
			<Cart/>
		</header>
	)
}

export default Header
