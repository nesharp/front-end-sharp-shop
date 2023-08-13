import styles from './ProfileInput.module.scss'
import classNames from 'classnames'
import { FC, useState } from 'react'

interface Props {
	type: string
	placeholder: string
	className?: string
	value?: string
	onChange?: (value: string) => void
}
export const ProfileInput: FC<Props> = ({
	type,
	placeholder,
	className,
	value,
	onChange,
}) => {
	return (
		<div className={classNames(styles.wrapper, className || '')}>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange && onChange(e.target.value)}
			/>
		</div>
	)
}
