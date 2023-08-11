import { useAuth } from './useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { replace } = useRouter()
	const router = useRouter()
	useEffect(() => {
		// if (user) {
		// 	replace('/')
		// }
		if(user){
			router.back()
		}
	}, [user])
}
