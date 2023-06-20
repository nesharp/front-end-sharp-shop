import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '../auth-page.types'
import dynamic from 'next/dynamic'
import { resourceUsage } from 'process'
import { FC, PropsWithChildren, use, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/router'
import { getAccessToken } from '@/services/auth/auth.helper'
import Cookies from 'js-cookie'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})

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
			{children}
		</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
