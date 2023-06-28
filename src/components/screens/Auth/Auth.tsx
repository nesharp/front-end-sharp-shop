import styles from './Auth.module.scss';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, FormEventHandler } from 'react';



import DarkButton from '@/components/ui/DarkButton/DarkButton';
import Input from '@/components/ui/Input/Input';
import Meta from '@/components/ui/Meta';



import { IEmailPassword } from '@/store/user/user.interface';



import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import Loader from '@/components/ui/Loader/Loader';


const Auth: NextPage = () => {
	const { isLoading } = useAuth()
	const { login, register } = useActions()
	const router = useRouter()
	useAuthRedirect()
	const submitHandler = (e: FormEvent<HTMLFormElement> | any) => {
		e.preventDefault()
		const email = e.target[0].value
		const password = e.target[1].value
		const data: IEmailPassword = { email, password }
		const action = e.nativeEvent.submitter.value
		if (action === 'Login') {
			login(data)
		}
		if (action === 'Register') {
			register(data)
		}
		if (action === 'Forgot Password') {
			console.log('forgot password')
		}
	}

	return (
		<Meta title='login'>
			{isLoading && <Loader />}
			<form
				className={styles.form}
				onSubmit={e => {
					submitHandler(e)
				}}
			>
				<h2>Login</h2>
				<div className='group'>
					<Input autoComplete='off' type='text' required={true}>
						Username
					</Input>
					<Input type='password' autoComplete='off' required={true}>
						Password
					</Input>
					<div className={styles.form__submit}>
						<DarkButton
							type='submit'
							disabled={false}
							size='small'
							className={styles.hover__success}
						>
							Login
						</DarkButton>
						<DarkButton
							type='submit'
							disabled={false}
							size='small'
							className={styles.hover__success}
						>
							Register
						</DarkButton>
					</div>
					<DarkButton
						type='submit'
						disabled={true}
						size='medium'
						className={styles.form__forgot}
					
					>
						Forgot Password
					</DarkButton>
				</div>
			</form>
		</Meta>
	)
}

export default Auth