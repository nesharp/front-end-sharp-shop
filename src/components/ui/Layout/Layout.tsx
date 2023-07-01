import Header from '../Header/Header'
import style from './Layout.module.scss'
import SideBar from './SideBar/SideBar'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={style.layout}>
			<Header />
			<div className={style.wrapper}>
				<SideBar />
				<main className={style.main}>{children}</main>
			</div>
		</div>
	)
}

export default Layout
