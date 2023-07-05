export const getLocalStorage = (key: string) => {
	if (typeof localStorage !== 'undefined') {
		const item = localStorage.getItem(key)
		try {
			if (item && item !== 'undefined' && item !== 'null') {
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
