import React, { createContext, useState } from 'react';

const defaultContext = {
    location: '',
    dateFrom: '',
    dateTo: '',
    subjectName: '',
    submitterName: '',
    school: '',
    grade: '',
    teacher: ''
};

export const SearchContext = createContext(defaultContext);

export const SearchProvider = ({ children }) => {
	const [searchContext, setSearchContext] = useState(defaultContext);

    return (
        <SearchContext.Provider value={[searchContext, setSearchContext]}>
            {children}
        </SearchContext.Provider>
    );
};