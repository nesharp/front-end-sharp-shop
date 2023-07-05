import { TypeComponentAuthFields } from '../auth-page.types'
<<<<<<< HEAD
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
=======
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlySigned }
}, children) => {
	const { user } = useAuth()
    const router = useRouter()


    if (isOnlySigned && user) {
        return <>{children}</>
    }   
    

    router.pathname !== '/auth' && router.push('/auth')
	return null
}

>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
export default CheckRole
