import styles from './Carousel.module.scss'
import { FC, useEffect, useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface ICarousel {
	images: string[]
}

const Carousel: FC<ICarousel> = ({ images }) => {
	const [id, setId] = useState(0)
	const imageRef = useRef(null)
	const nextImage = () => {
		if (id === images.length - 1) {
			setId(0)
			return
		}
		setId(id + 1)
	}
	const prevImage = () => {
		if (id === 0) {
			setId(images.length - 1)
			return
		}
		setId(id - 1)
	}
    useEffect(() => {
    }, [id])
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
			<img ref={imageRef} src={images ? images[id] : ''} alt='' />
		</div>
	)
}

export default Carousel
