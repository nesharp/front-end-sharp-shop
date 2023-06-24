import { TypeComponentAuthFields } from '../auth-page.types'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = (
	{ Component: { isOnlySignedIn } },
	children
) => {
	const user = useAuth()
	const router = useRouter()
	if ((isOnlySignedIn && user) || !isOnlySignedIn) {
		return <>{children}</>
	}
	router.pathname !== '/auth' && router.push('/auth')

	return null
}
export default CheckRole
