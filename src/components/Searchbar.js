import React, { useEffect, useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { DateInput, StyledButton, TextInput } from '../components';
import { useHistory, useLocation } from 'react-router-dom';
import { formatDateData, getQueryParam, SearchContext } from '../util';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import constants from '../styling/Constants';

/**
 * Takes a DOM id and returns the value in the corresponding input element.
 * This is used to get values in MUI inputs, which consist of many nested elements.
 * @param {String} wrapId DOM id of target input element
 * @returns {String} Value in the input element with the given id
 */
function getInputVal(wrapId) {
    return document.getElementById(wrapId)?.getElementsByTagName('input')[0]?.value;
}

/**
 * Executes search by redirecting to /gallery with query params in the URL.
 * @param {History} history Object returned by useHistory() hook
 * @param {React.Context} searchContext Object returned by useContext(SearchContext) hook
 */
function submitSearch(history, searchContext) {
    // construct query string for URL path
    let localVals = Object.assign({}, searchContext);
    if (!localVals.dateTo) localVals.dateTo = localVals.dateFrom;

    let newPath = `/gallery${localVals !== {} ? '?' : ''}`;
    for (const [key, val] of Object.entries(localVals)) {
        newPath += `&${key}=${val}`
    }
    newPath = newPath.replace('&', '');

    history.push(newPath);
}

/**
 * Creates an object which contains current values of the search fields.
 * This object can then be used to update the application's search context.
 * @param {React.Context} searchContext Object returned by useContext(SearchContext) hook
 * @returns {Object} Object with fields updated based on current search inputs
 */
function createNewContext(searchContext) {
    let newContext = Object.assign({}, searchContext);

    // parse date in basic search
    let date = getInputVal('date-input-wrap'); // obtain date in text format
    if (date) date = new Date(date); // create date object
    newContext.dateFrom = formatDateData(date); // store in standard format

    // parse dateFrom in advanced search
    // TODO Anna: change advanced search UI to avoid duplicating date
    let dateFrom = getInputVal('date-from-wrap');
    if (dateFrom) {
        dateFrom = new Date(dateFrom);
    } else {
        dateFrom = date;
    }
    newContext.dateFrom = formatDateData(dateFrom);

    // parse dateTo in advanced search
    let dateTo = getInputVal('date-to-wrap');
    if (dateTo) {
        dateTo = new Date(dateTo);
    } else {
        dateTo = dateFrom;
    }
    newContext.dateTo = formatDateData(dateTo);

    newContext.grade = getInputVal('grade-wrap');
    newContext.location = getInputVal('location-input-wrap');
    newContext.school = getInputVal('school-wrap');
    newContext.subjectName = getInputVal('subject-name-wrap');
    newContext.submitterName = getInputVal('submitter-name-wrap');
    newContext.teacher = getInputVal('teacher-wrap');

    return newContext;
}

/**
 * Component for advanced search panel dropdown.
 */
function AdvancedSearch({ advancedOpen=false }) {
    const advancedStyles = makeStyles({
        root: {
            display: advancedOpen ? 'inline-block' : 'none',
            zIndex: 1,
            fontFamily: constants.fontFamily.body,
            fontSize: constants.fontSize.xs,
            height: 'fit-content',
            maxHeight: 'calc(100vh - 100px)',
            overflow: 'auto',
            backgroundColor: constants.color.lightGray,
            color: constants.color.dark,
            boxShadow: constants.boxShadow.initial,
            top: '150px',
            width: 'fit-content',
            position: 'fixed',
            padding: '36px 36px 0',
            margin: 'auto',
            '& label': {
                margin: '0 12px',
            },
            '& > div > div': {
                display: 'flex',
                margin: '12px 0',
                alignItems: 'center',
                width: '100%',
                '& > div': {
                    display: 'inline-block',
                    margin: '3px 0',
                },
            },
            '& .select-wrap': {
                float: 'right',
                marginRight: 0,
                marginLeft: 'auto',
            },
            '& h2': {
                fontFamily: constants.fontFamily.header,
                fontWeight: 'bold',
                fontSize: constants.fontSize.m,
                textTransform: 'uppercase',
            },
            '& h3': {
                fontFamily: constants.fontFamily.header,
                fontWeight: 'bold',
                fontSize: constants.fontSize.s,
                textTransform: 'uppercase',
            },
            '& .adv-search-section': {
                margin: '12px auto',
                padding: '0 0 12px',
            },
            '& .inline': {
                width: '100%',
                display: 'inline-flex',
            },
        },
    });

    return (
        <div className={advancedStyles().root}>
            <div className='adv-search-section' id='adv-search-by-submission'>
                <h3>By Submission</h3>
                <div id='adv-search-date' className='inline'>
                    <label htmlFor='date-from'>From</label>
                    <span className='select-wrap' id='date-from-wrap'>
                        <DateInput placeholder='Date' id='date-from' name='date-from' />
                    </span>
                    <label htmlFor='date-to'>to</label>
                    <span className='select-wrap' id='date-to-wrap'>
                        <DateInput placeholder='Date' id='date-to' name='date-to' />
                    </span>
                </div>
                <div id='adv-search-subject-name'>
                    <label htmlFor='subject-name'>Subject name</label>
                    <span className='select-wrap' id='subject-name-wrap'>
                        <TextInput placeholder='Name' id='subject-name' name='subject-name' />
                    </span>
                </div>
            </div>
            <div className='adv-search-section' id='adv-search-by-submitter'>
                <h3>By Submitter</h3>
                <div id='adv-search-submitter-name'>
                    <label htmlFor='submitter-name'>Submitter name</label>
                    <span className='select-wrap' id='submitter-name-wrap'>
                        <TextInput placeholder='Name' id='submitter-name' name='submitter-name' />
                    </span>
                </div>
                <div id='adv-search-school'>
                    <label htmlFor='school'>School name</label>
                    <span className='select-wrap' id='school-wrap'>
                        <TextInput placeholder='School' id='school' name='school' />
                    </span>
                </div>
                <div id='adv-search-grade'>
                    <label htmlFor='grade'>Grade</label>
                    <span className='select-wrap' id='grade-wrap'>
                        <TextInput placeholder='Grade' id='grade' name='grade' />
                    </span>
                </div>
                <div id='adv-search-teacher'>
                    <label htmlFor='teacher'>Teacher name</label>
                    <span className='select-wrap' id='teacher-wrap'>
                        <TextInput placeholder='Teacher' id='teacher' name='teacher' />
                    </span>
                </div>
            </div>
        </div>
    );
}

/**
 * Searchbar allowing search by location, date, and advanced search features.
 */
export function Searchbar({ open=true }) {
    const [advancedOpen, setAdvancedOpen] = useState(false);
    const history = useHistory();
    const [searchContext, setSearchContext] = useContext(SearchContext);
    const searchPath = useLocation().search;

    useEffect(() => {
        setAdvancedOpen(false);
    }, [open]); // when searchbar is toggled, hide advanced search panel

    const useStyles = makeStyles({
        root: {
            zIndex: 2,
            display: open ? 'inherit' : 'none',
            fontFamily: constants.fontFamily.body,
            fontSize: constants.fontSize.l,
            width: '100%',
            height: 'fit-content',
            padding: '6px 0 16px',
            backgroundColor: constants.color.accentPrimary,
            color: constants.color.light,
            boxShadow: constants.boxShadow.initial,
            textAlign: 'center',
            position: 'fixed',
            top: '50px',
            '& div': {
                display: 'inline-flex',
                width: 'fit-content',
                alignItems: 'center',
            },
            '& .select-wrap': {
                height: '39px',
                alignItems: 'center',
            },
            '& p': {
                margin: '18px'
            },
            '& a': {
                fontSize: '12px',
                textDecoration: 'underline',
                color: constants.color.dark,
            },
            '& #open-adv-search': {
                fontSize: '12px',
                fontFamily: constants.fontFamily.body,
                border: 'none',
                background: 'none',
                margin: '0',
                cursor: 'pointer',
                '&:hover': {
                    color: constants.color.light,
                },
            },
            '& .MuiInputBase-adornedEnd': {
                width: '180px',
            },
            '& .MuiInputLabel-animated': {
                '&:not(.MuiInputLabel-outlined)': {
                    left: '12px',
                },
            },
        },
    });

    return (
        <div style={{position: 'relative', textAlign: 'center'}}>
            <div className={useStyles().root} id='basic-search'>
                <div>
                    <p>What happened in</p>
                    <span className='select-wrap' id='location-input-wrap'>
                        <TextInput id='location-input' label='City, Country'
                            defaultValue={getQueryParam('location', searchPath)}
                        />
                    </span>
                    <p>on</p>
                    <span id='date-input-wrap' className='select-wrap'>
                        <DateInput id='date-input' label='Date' 
                            defaultValue={getQueryParam('dateFrom', searchPath)}
                        />
                    </span>
                    <p>?</p>
                    <StyledButton
                        color={constants.color.dark}
                        onClick={() => {
                            setSearchContext(createNewContext(searchContext));
                            submitSearch(history, createNewContext(searchContext));
                        }}
                    >
                        Search
                    </StyledButton>
                    <button id='open-adv-search' onClick={() => setAdvancedOpen(!advancedOpen)}>
                        {advancedOpen 
                            ? <ArrowDropUpIcon style={{color: constants.color.dark}} />
                            : <ArrowDropDownIcon style={{color: constants.color.dark}} />}
                    </button>
                </div>
            </div>
            <AdvancedSearch advancedOpen={advancedOpen} />
        </div>
    );
}