import { NextPage } from 'next'
import React, { useState } from 'react'

import { AddAdminPage } from '@/components/screens/AddAdminPage/AddAdminPage'
import { DeleteAdminPage } from '@/components/screens/DeleteAdminPage/DeleteAdminPage'
import { AdminHeader } from '@/components/ui/AdminHeader/AdminHeader'
import Header from '@/components/ui/Header/Header'

export interface IPage {
	page: 'add' | 'delete' | 'edit'
}
const Admin: NextPage = () => {
	const [currentPage, setCurrentPage] = useState<IPage>({ page: 'add' })
	return (
		<div>
			<Header />
			<AdminHeader page={currentPage} setCurrentPage={setCurrentPage} />
			{currentPage.page === 'add' ? (
				<AddAdminPage />
			) : (
				<DeleteAdminPage />
			)}
		</div>
	)
}
export default Admin
