import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import constants from '../styling/Constants';
import { TextInput, DateInput, StyledButton } from '../components';
import { formatDateData } from '../util';
import { useHistory } from 'react-router-dom';

function getInputVal(wrapId) {
    return document.getElementById(wrapId)?.getElementsByTagName('input')[0]?.value;
}

function getLocal(key) {
    return window.localStorage.getItem(key);
}

function saveLocalSearch() {
    window.localStorage.setItem('location', getInputVal('location-input-wrap'));

    let date = getInputVal('date-input-wrap');
    if (date) date = new Date(date);
    window.localStorage.setItem('dateFrom', formatDateData(date));

    let dateFrom = getInputVal('date-from-wrap');
    if (dateFrom) {
        dateFrom = new Date(dateFrom);
    } else {
        dateFrom = date;
    }
    window.localStorage.setItem('dateFrom', formatDateData(dateFrom));

    let dateTo = getInputVal('date-to-wrap');
    if (dateTo) {
        dateTo = new Date(dateTo);
    } else {
        dateTo = dateFrom;
    }
    window.localStorage.setItem('dateTo', formatDateData(dateTo));

    window.localStorage.setItem('subjectName', getInputVal('subject-name-wrap'));
    window.localStorage.setItem('submitterName', getInputVal('submitter-name-wrap'));
    window.localStorage.setItem('grade', getInputVal('grade-wrap'));
    window.localStorage.setItem('teacher', getInputVal('teacher-wrap'));
}

function setElemVal(wrapId, val) {
    document.getElementById(wrapId).getElementsByTagName('input').value = val;
}

function updateFields() {
    setElemVal('location-input-wrap', getLocal('location'));
    setElemVal('date-input-wrap', getLocal('dateFrom'));
    setElemVal('date-from-wrap', getLocal('dateFrom'));
    setElemVal('date-to-wrap', getLocal('dateTo'));
    setElemVal('subject-name-wrap', getLocal('subjectName'));
    setElemVal('submitter-name-wrap', getLocal('submitterName'));
    setElemVal('school-wrap', getLocal('school'));
    setElemVal('grade-wrap', getLocal('grade'));
    setElemVal('teacher-wrap', getLocal('teacher'));
}

// execute search by redirecting to gallery with query params in URL
function submitSearch(history, e) {
    e.preventDefault();
    saveLocalSearch();

    // construct query string for URL path
    const localFields = [
        'location', 'dateFrom', 'dateTo',
        'subjectName', 'submitterName', 'grade', 'teacher'
    ];
    
    let localVals = {};
    localFields.forEach((field) => {
        localVals[field] = getLocal(field);
    });
    if (!localVals.dateTo) localVals.dateTo = localVals.dateFrom;

    let newPath = `/gallery${localVals !== {} ? '?' : ''}`;
    for (const [key, val] of Object.entries(localVals)) {
        newPath += `&${key}=${val}`
    }
    newPath = newPath.replace('&', '');

    history.push(newPath);
}

export function Searchbar({ open=true }) {
    const [advancedOpen, setAdvancedOpen] = useState(false);
    const history = useHistory();
    
    useEffect(() => {
        setAdvancedOpen(false);
    }, [open]);

    useEffect(() => {
        updateFields();
    }, []);

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

    const advancedStyles = makeStyles({
        root: {
            zIndex: 1,
            display: advancedOpen ? 'inline-block' : 'none',
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
            padding: '36px',
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

    const AdvancedSearch = () => 
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
            <StyledButton color={constants.color.dark} onClick={e => submitSearch(history, e)}>
                Search
            </StyledButton>
        </div>

    return (
        <div style={{position: 'relative', textAlign: 'center'}}>
            <div className={useStyles().root} id='basic-search'>
                <div>
                    <p>What happened in</p>
                    <span className='select-wrap' id='location-input-wrap'>
                        <TextInput id='location-input' label='City, Country' />
                    </span>
                    <p>on</p>
                    <span id='date-input-wrap' className='select-wrap'>
                        <DateInput id='date-input' label='Date' />
                    </span>
                    <p>?</p>
                    <StyledButton color={constants.color.dark} onClick={e => submitSearch(history, e)}>
                        Search
                    </StyledButton>
                    <button id='open-adv-search' onClick={() => setAdvancedOpen(!advancedOpen)}>
                        {advancedOpen 
                            ? <ArrowDropUpIcon style={{color: constants.color.dark}} />
                            : <ArrowDropDownIcon style={{color: constants.color.dark}} />}
                    </button>
                </div>
            </div>
            <AdvancedSearch />
        </div>
    );
}