import { FC } from 'react'
import styles from './ProductCart.module.scss'
import Image from 'next/image'
import { IProduct } from '@/interfaces/product.interface'
import DarkButton from '../DarkButton/DarkButton'

const ProductCart: FC<IProduct> = ({id, name, description, price, images}) => {
    return <div className={styles.cart}>
        <Image src={images[0]} alt={'asd'} width={200} height={200} className={styles.image} />
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h2>${price}</h2>
        <div className={styles.buttons}>
            <DarkButton type='button' size='small' className={styles.button1}>Add to cart</DarkButton>
            <DarkButton type='button' size='small' className={styles.button2}>Buy</DarkButton>
        </div>
    </div>
}

export default ProductCart