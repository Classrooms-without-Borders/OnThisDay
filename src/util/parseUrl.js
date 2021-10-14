export const getQueryParams = search => {
	return search?.split('&').map(param => {
        let tmp = param.split('=').at(-1);
        if (typeof tmp === 'string') return tmp.split('%20').join(' ');
        return tmp;
    });
};

export const getQueryParam = (param, search) => {
    const res = search?.split(param + '=').at(-1).split('&')[0];
    if (typeof res === 'string') {
        return res.split('%20').join(' ');
    }
    return res;
};