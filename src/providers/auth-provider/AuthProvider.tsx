<<<<<<< HEAD
import { TypeComponentAuthFields } from '../auth-page.types'
import { getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
=======
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '../auth-page.types'
import dynamic from 'next/dynamic'
import { resourceUsage } from 'process'
import { FC, PropsWithChildren, use, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import { getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'
>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})
<<<<<<< HEAD
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
=======

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = (
	{ Component: { isOnlySigned } },
	children
) => {

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
    
	return isOnlySigned ? (
		<DynamicCheckRole Component={{ isOnlySigned }}>
>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
			{children}
		</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}
<<<<<<< HEAD
=======

>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
export default AuthProvider
