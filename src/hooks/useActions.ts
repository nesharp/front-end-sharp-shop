import { bindActionCreators } from '@reduxjs/toolkit'
import { root } from 'postcss'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(root, dispatch), [dispatch])
}