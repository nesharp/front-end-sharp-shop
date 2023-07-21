import userService from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	const {} = useQuery(['get profile'], () => {})
}
