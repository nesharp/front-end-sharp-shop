import styles from './NumberInput.module.scss'
import classNames from 'classnames'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IconType } from 'react-icons/lib'
import { start } from 'repl'

interface INumberInput {
	number: number
	setNumber: Dispatch<SetStateAction<number>>
	image?: JSX.Element
	className?: string
	limited?: boolean
}

const NumberInput: FC<INumberInput> = ({
	number,
	setNumber,
	image,
	className,
	limited
}) => {
	return (
		<div className={classNames(styles.wrapper, className)}>
			<input
				type='number'
				className={styles.stars}
				value={number}
				onChange={e => {
					setNumber(+e.currentTarget.value)
				}}
			/>
			<div className={styles.value__changer}>
				<div>
					<AiOutlinePlus
						size={14}
						onClick={() => {
							limited
								? number < 5 && setNumber(number + 1)
								: setNumber(number + 1)
						}}
					/>
				</div>
				<div>
					<AiOutlineMinus
						size={14}
						onClick={() => {
							number > 1 && setNumber(number - 1)
						}}
					/>
				</div>
			</div>
			<div className={styles.star}>{image && image}</div>
		</div>
	)
}

export default NumberInput
