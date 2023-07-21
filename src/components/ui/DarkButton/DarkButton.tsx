import style from './DarkButton.module.scss'
import cn from 'classnames'
import { FC, FormEvent, PropsWithChildren } from 'react'

interface TypeProps {
	className?: string
	onClick?: (e: any) => void
	disabled?: boolean
	type: 'submit' | 'button' | 'reset'
	size?: 'small' | 'medium'
}
const DarkButton: FC<PropsWithChildren<TypeProps>> = ({
	className,
	disabled,
	type,
	size,
	onClick,
	children
}) => {
	return (
		<input
			type={type}
			className={cn(style.button, className)}
			value={children?.toString()}
			disabled={disabled}
			style={
				size === 'small'
					? { padding: '2px 1.8em 6px 1.8em' }
					: { width: '80%' }
			}
			onClick={e => {
				onClick ? onClick(e) : null
			}}
		/>
	)
}

export default DarkButton
