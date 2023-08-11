import { NextPage } from 'next'
import React from 'react'

import { AdminPage } from '@/components/screens/AdminPage/AdminPage'
import Header from '@/components/ui/Header/Header'

const Admin: NextPage = () => {
	return (
		<div>
			<Header />
			<AdminPage />
		</div>
	)
}
export default Admin
