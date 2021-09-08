export function dateToString(date) {
	return date.toLocaleString('default', { 
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}