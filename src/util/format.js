export function dateToString(date) {
	return date.toLocaleString('default', { 
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

export function formatDateData(date) {
    if (date === '') return date;
    const yrFormat = new Intl.DateTimeFormat('en', { year: 'numeric' });
    const mthFormat = new Intl.DateTimeFormat('en', { month: 'numeric' });
    const dayFormat = new Intl.DateTimeFormat('en', { month: 'numeric' });
    return `${dayFormat.format(date)}-${mthFormat.format(date)}-${yrFormat.format(date)}`;
}

export function toDate(datestring) {
    const [day, month, year] = datestring.split('-');
    return new Date(year, month, day);
}