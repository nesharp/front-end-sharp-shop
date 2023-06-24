import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '../auth-page.types'
import { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = (
    { component: { isOnlySignedIn } },
    children
) => {
    const user = useAuth()
    const router = useRouter()
    if (isOnlySignedIn && user || !isOnlySignedIn) {
        return <>{children}</>
    }    
    router.pathname !== '/auth' && router.push('/auth')

    return null

}
export default CheckRole
