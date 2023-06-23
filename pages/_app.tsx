import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@/assets/styles/globals.css'

import { persistor, store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}
