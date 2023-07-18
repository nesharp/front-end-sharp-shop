import styles from './NumberInput.module.scss'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { start } from 'repl'

interface INumberInput {
	stars: number
	setStars: Dispatch<SetStateAction<number>>
}

const NumberInput: FC<INumberInput> = ({ stars, setStars }) => {
	return (
		<div className={styles.wrapper}>
			<input
				type='number'
				className={styles.stars}
				value={stars}
				onChange={e => {
					setStars(+e.currentTarget.value)
				}}
			/>
			<div className={styles.value__changer}>
				<div>
					<AiOutlinePlus
						size={14}
						onClick={() => {
							stars < 5 && setStars(stars + 1)
						}}
					/>
				</div>
				<div>
					<AiOutlineMinus
						size={14}
						onClick={() => {
							stars > 1 && setStars(stars - 1)
						}}
					/>
				</div>
			</div>
			<AiFillStar className='star' size={30} />
		</div>
	)
}

export default NumberInput
