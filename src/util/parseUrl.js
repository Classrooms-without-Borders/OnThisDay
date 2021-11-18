/**
 * Splits a URL query string into a list of query parameter values.
 * @param {String} search URL query path
 * @returns {Array<String>} Query parameter values
 */
export const getQueryParams = search => {
	return search?.split('&').map(param => {
        let tmp = param.split('=').at(-1);
        if (typeof tmp === 'string') return tmp.replaceAll('%20', ' ');
        return tmp;
    });
};

/**
 * Gets the value of a query parameter in a URL query string.
 * @param {String} param Name of parameter to get
 * @param {String} search URL query path
 * @returns {String} Query parameter value
 */
export const getQueryParam = (param, search) => {
    const res = search?.split(param + '=').at(-1).split('&')[0];
    if (typeof res === 'string') {
        return res.replaceAll('%20', ' ');
    }
    return res;
};