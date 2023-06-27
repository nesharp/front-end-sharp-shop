import { TypeComponentAuthFields } from '../auth-page.types'
import { getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})
const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlySignedIn },
	children
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()
	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) {
			checkAuth()
		}
	}, [])
	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) {
			logout()
		}
	}, [pathname])
	return isOnlySignedIn ? (
		<DynamicCheckRole Component={{ isOnlySignedIn }}>
			{children}
		</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}
export default AuthProvider
