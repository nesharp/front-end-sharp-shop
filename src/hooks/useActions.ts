<<<<<<< HEAD
import { rootActions } from '@/store/root.actions'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
=======
import { rootActions } from "@/store/root.actions"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
