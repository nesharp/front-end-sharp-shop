import logo from './favicon.svg'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link
					rel='icon'
					type='image/svg+xml'
					sizes='any'
					href='https://www.svgrepo.com/show/217771/shopping-logo.svg'
				/>
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
