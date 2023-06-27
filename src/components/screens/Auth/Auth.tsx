import styles from './Auth.module.scss'
import { NextPage } from 'next'

import Input from '@/components/ui/Input/Input'
import Meta from '@/components/ui/Meta'

const Auth: NextPage = () => {
	return (
		<Meta title='login'>
			<form className={styles.form}>
				<p id='heading'>Login</p>
				<div className='group'>
					<Input autoComplete='off' type='text'>
						Username
					</Input>
					<Input type='password' autoComplete='off'>
						Password
					</Input>
				</div>
			</form>
		</Meta>
	)
}

export default Auth
