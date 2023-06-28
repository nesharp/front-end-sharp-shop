export const getLocalStorage = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const item = localStorage.getItem(key)
		console.log('getLocalStorage', item)
		try {
			if (item && item !== 'undefined' && item !== 'null') {
				console.log('getLocalStorage', item)
				return JSON.parse(item)
			} else {
				return null
			}
		} catch {
			return null
		}
	}

	return null
}
