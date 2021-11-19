/**
 * Formats JS Date object as human-readable date string, e.g. Dec 30, 1930
 * @param {Date} date
 * @returns {String} Human-readable date string in MMM D, YYYY format
 */
export function dateToString(date) {
	return date.toLocaleString('default', { 
        month: 'short', // e.g. Dec
        day: 'numeric',
        year: 'numeric',
    });
}

/**
 * Formats JS Date object as D-M-YYYY, e.g. 30-12-1930
 * This is used to turn dates into succinct URL query parameters.
 * @param {Date} date
 * @returns {String} Date string in D-M-YYYY format
 */
export function formatDateData(date) {
    if (date === '' || date === null) return date;
    const yrFormat = new Intl.DateTimeFormat('en', { year: 'numeric' });
    const mthFormat = new Intl.DateTimeFormat('en', { month: 'numeric' });
    const dayFormat = new Intl.DateTimeFormat('en', { day: 'numeric' });
    return `${dayFormat.format(date)}-${mthFormat.format(date)}-${yrFormat.format(date)}`;
}

/**
 * Converts D-M-YYYY date string into a Date object.
 * This is used to turn URL query parameters back into usable JS Dates.
 * @param {String} datestring D-M-YYYY format
 * @returns {Date}
 */
export function toDate(datestring) {
    const [day, month, year] = datestring.split('-');
    return new Date(year, month, day);
}

/**
 * Adds multiple strings representing sizes in px and returns a px measurement.
 * @param {String[]} args Strings representing numbers optionally followed by 'px'
 * @returns {String} String representing the sum of the inputs followed by 'px'
 */
export function addPx(...args) {
    let sum = 0;
    args.map(arg => {
        sum += parseInt(arg.toString().replace('px', ''));
        return arg;
    })
    return sum.toString().concat('px');
}