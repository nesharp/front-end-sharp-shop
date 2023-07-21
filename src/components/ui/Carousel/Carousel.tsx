import styles from './Carousel.module.scss'
import { FC, useEffect, useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface ICarousel {
	images: string[]
}

const Carousel: FC<ICarousel> = ({ images }) => {
	const [id, setId] = useState(0)
	const imageRef = useRef(null)
	const wrapper = useRef<HTMLImageElement>(null)
	const nextImage = () => {
		wrapper.current!.innerHTML = ''
		id === images.length - 1 ? setId(0) : setId(id + 1)
		wrapper.current!.innerHTML = `<img src=${images[id]} ref=${imageRef} />`
	}
	const prevImage = () => {
		wrapper.current!.innerHTML = ''
		id === 0 ? setId(images.length - 1) : setId(id - 1)
		wrapper.current!.innerHTML = `<img src=${images[id]}/>`
	}
	useEffect(() => {
		wrapper.current!.innerHTML = `<img src=${images[0]}/>`
	}, [])
	return (
		<div className={styles.carousel}>
			<div className={styles.buttons}>
				<button className={styles.button}>
					<AiOutlineArrowLeft onClick={prevImage} />
				</button>
				<button className={styles.button}>
					<AiOutlineArrowRight onClick={nextImage} />
				</button>
			</div>
			<div ref={wrapper} className={styles.wrapper}></div>
		</div>
	)
}

export default Carousel
