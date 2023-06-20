import { NextPage } from "next"

export interface IRoles {
    isOnlySigned?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & IRoles
export type TypeComponentAuthFields = {Component: IRoles}