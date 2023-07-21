export const capitalize = (str: string): string => {
	const lower = str.toLowerCase()
	return lower.charAt(0).toUpperCase() + lower.slice(1)
}
