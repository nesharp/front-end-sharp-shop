import styles from './ImagesLoader.module.scss'
import classNames from 'classnames'
import { FC, useRef, useState } from 'react'

interface ImageLoaderProps {
	className?: string
}
export const ImagesLoader: FC<ImageLoaderProps> = ({ className }) => {
	const [images, setImages] = useState<string[]>([])
	const imageRef = useRef() as React.MutableRefObject<HTMLInputElement>
	return (
		<div className={classNames(styles.wrapper, className || '')}>
			<div className={styles.images}>
				{images.map(item => (
					<img src={item} />
				))}
			</div>
			<input
				type='file'
				ref={imageRef}
				onChange={e => {
					if (e.target.files) {
						const files = Array.from(e.target.files)
						const imgRefs: string[] = files.map(file =>
							URL.createObjectURL(file)
						)
						setImages([...images, ...imgRefs])
					}
				}}
				id='loaderInput'
				accept='image/png, image/gif, image/jpeg'
				className={styles.loaderInput}
			/>
			<label htmlFor='loaderInput' className={styles.loaderLabel}>
				Add photo
			</label>
		</div>
	)
}
