<<<<<<< HEAD
import { NextPage } from 'next'

export interface IRoles {
	isOnlySignedIn?: boolean
}
=======
import { NextPage } from "next"

export interface IRoles {
    isOnlySigned?: boolean
}

>>>>>>> 02c401b71d3680089e0fc9344d204416d9145c8f
export type NextPageAuth<P = {}> = NextPage<P> & IRoles
export type TypeComponentAuthFields = {Component: IRoles}