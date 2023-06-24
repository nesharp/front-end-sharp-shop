import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '../auth-page.types'
import { FC, PropsWithChildren } from 'react'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = (
	{ component: { isOnlySignedIn } },
	children
) => {
    const user = useAuth()
    return 0
}
