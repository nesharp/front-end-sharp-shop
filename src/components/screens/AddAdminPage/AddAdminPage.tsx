import styles from './AdminPage.module.scss'
import { ICategory } from '@/interfaces/category.interface'
import productService from '@/services/products/product.service'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { CategoryDropDown } from '@/components/ui/CategoryDropDown/CategoryDropDown'
import { InfinityInputs } from '@/components/ui/InfinityInputs/InfinityInputs'

import { useAuth } from '@/hooks/useAuth'

export const AddAdminPage: FC = () => {
	const { user } = useAuth()
	const router = useRouter()
	const [name, setName] = useState<string>('')
	const [price, setPrice] = useState<number>(0)
	const [description, setDescription] = useState<string>('')
	const [images, setImages] = useState<string[]>([])
	const [categoryId, setCategoryId] = useState<number>(0)
	useEffect(() => {
		if (!user) {
			router.push('/auth')
		}
		console.log(user)
	}, [])
	return (
		<div className={styles.adminPageWrapper}>
			<h3>Add product</h3>
			<div className={styles.form}>
				<div className={styles.inputs}>
					<div className={styles.firstLevelInputs}>
						<input
							type='text'
							placeholder='Product name'
							className={styles.name}
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input
							type='text'
							className={styles.price}
							placeholder='Price'
							value={price}
							onChange={e => {
								if (e.target.value.match(/^[0-9]+$/) || e.target.value === '') {
									setPrice(Number(e.target.value))
								}
							}}
						/>
					</div>
					<InfinityInputs images={images} setImages={setImages} />
					<textarea
						className={styles.textArea}
						placeholder='Description'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<CategoryDropDown
						categoryId={categoryId}
						setCategoryId={setCategoryId}
					/>
				</div>
				<div className={styles.buttons}>
					<button
						className={styles.submit}
						onClick={() => {
							productService
								.create({
									name,
									price,
									description,
									images,
									categoryId
								})
								.then(product => {
									productService.update(product.data.id, {
										name,
										price,
										description,
										images,
										categoryId
									})
								})
							setName('')
							setPrice(0)
							setDescription('')
							setImages([])
							setCategoryId(0)
							alert('Product added')
						}}
					>
						Add
					</button>
					<button
						className={styles.cancel}
						onClick={() => {
							router.replace('/')
						}}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}
