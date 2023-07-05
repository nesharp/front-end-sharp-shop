<<<<<<< HEAD
import "@/assets/styles/globals.css"
import { persistor, store } from "@/store/store"
import { QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null}  persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>  
      </Provider>
    </QueryClientProvider>
  )
=======
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { TypeComponentAuthFields } from '@/providers/auth-page.types'
import AuthProvider from '@/providers/auth-provider/AuthProvider'

import '@/assets/styles/global.scss'

import { persistor, store } from '@/store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider Component={{ isOnlySignedIn: Component.isOnlySignedIn }}>
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
>>>>>>> new-brunch
}
