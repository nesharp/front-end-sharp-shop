import { TypeComponentAuthFields } from '../auth-page.types'
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

export default CheckRole
