import styles from './ProfilePage.module.scss'
import { IUser } from '@/interfaces/user.interfaces'
import userService from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import DarkButton from '@/components/ui/DarkButton/DarkButton'
import Loader from '@/components/ui/Loader/Loader'
import { ProfileInput } from '@/components/ui/ProfileInput/ProfileInput'

import { useAuth } from '@/hooks/useAuth'

export const ProfilePage = () => {
	const { user: loginedUser } = useAuth()
	const router = useRouter()
	useEffect(() => {
		if (!loginedUser) {
			router.push('/auth')
		}
	}, [loginedUser])
	const { data: userData, isLoading } = useQuery(['profile'], () =>
		userService.getProfile()
	)
	useEffect(() => {
		if (userData) {
			setUser(userData.data)
		}
	}, [userData])
	const [user, setUser] = useState<IUser>({} as IUser)
	return isLoading ? (
		<Loader />
	) : (
		<div className={styles.wrapper}>
			<h2>Profile Page</h2>
			<div className={styles.content}>
				<ProfileInput
					type='text'
					placeholder='Name'
					value={user.name}
					onChange={value => {
						setUser({ ...user, name: value })
					}}
				/>
				<ProfileInput
					type='text'
					placeholder='Email'
					value={user.email}
					onChange={value => {
						setUser({ ...user, email: value })
					}}
				/>
				<ProfileInput
					type='text'
					placeholder='Phone'
					value={user.phone}
					onChange={value => {
						setUser({ ...user, phone: value })
					}}
				/>
				<ProfileInput
					type='text'
					placeholder='Avatar Path'
					value={user.avatarPath}
					onChange={value => {
						setUser({ ...user, avatarPath: value })
					}}
				/>
				<div className={styles.button}>
					<DarkButton
						type='button'
						size='small'
						onClick={() => {
							userService.updateProfile(user)
						}}
					>
						Save
					</DarkButton>
				</div>
			</div>
		</div>
	)
}
