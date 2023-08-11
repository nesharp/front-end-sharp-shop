import styles from './InfinityInputs.module.scss'
import classNames from 'classnames'
import React, { Dispatch, FC, FormEvent, SetStateAction, useRef } from 'react'

interface Props {
	images: string[]
	setImages: Dispatch<SetStateAction<string[]>>
	className?: string
}
export const InfinityInputs: FC<Props> = ({ images, setImages, className }) => {
	return (
		<div className={classNames(styles.wrapper, className || '')}>
			<div className={styles.imagesWrapper}>
				<h3>Images</h3>
				<div className={styles.images}>
					{images.map(image => (
						<img
							className={styles.form}
							src={image}
							key={image}
							onClick={e => {
								setImages(images.filter(i => i !== image))
							}}
						/>
					))}
				</div>
			</div>
			<form
				className={styles.bottomInputs}
				onSubmit={(e: any) => {
					e.preventDefault()
					if (images.indexOf(e.target[0].value) !== -1) return
					setImages([...images, e.target[0].value])
					e.target[0].value = ''
				}}
			>
				<input type='text' className={styles.srcInput} />
				<input
					type='submit'
					className={styles.submit}
					value='Add image'
				/>
			</form>
		</div>
	)
}
