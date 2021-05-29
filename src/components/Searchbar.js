import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import constants from '../styling/Constants';
import { TextInput, DateInput, StyledButton } from '../components';

function AdvancedSearch({ open=false }) {
    const useStyles = makeStyles({
        root: {
            zIndex: 97,
            display: open ? 'inline-block' : 'none',
            fontFamily: constants.fontFamily.body,
            fontSize: constants.fontSize.s,
            height: 'fit-content',
            maxHeight: 'calc(100vh - 200px)',
            overflow: 'auto',
            backgroundColor: constants.color.lightGray,
            color: constants.color.dark,
            boxShadow: constants.boxShadow,
            top: '120px',
            width: 'fit-content',
            position: 'fixed',
            padding: '36px',
            margin: 'auto',
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
            '& .MuiFormControl-root': {
                float: 'right',
                marginRight: 0,
                marginLeft: 'auto',
            },
        },
    });

    return (
        <div className={useStyles().root}>
            <h2>Advanced Search</h2>
            <div className='adv-search-section' id='adv-search-by-submission'>
                <h3>By Submission</h3>
                <div id='adv-search-date-from'>
                    <label htmlFor='date-from'>From</label>
                    <DateInput placeholder='Date' id='date-from' name='date-from' />
                </div>
                <div id='adv-search-date-to'>
                    <label htmlFor='date-to'>to</label>
                    <DateInput placeholder='Date' id='date-to' name='date-to' />
                </div>
                <div id='adv-search-subject-name'>
                    <label htmlFor='subject-name'>Subject name</label>
                    <TextInput placeholder='Name' id='subject-name' name='subject-name' />
                </div>
            </div>
            <div className='adv-search-section' id='adv-search-by-submitter'>
                <h3>By Submitter</h3>
                <div id='adv-search-submitter-name'>
                    <label htmlFor='submitter-name'>Submitter name</label>
                    <TextInput placeholder='Name' id='submitter-name' name='submitter-name' />
                </div>
                <div id='adv-search-school'>
                    <label htmlFor='school'>School</label>
                    <TextInput placeholder='School' id='school' name='school' />
                </div>
                <div id='adv-search-grade'>
                    <label htmlFor='grade'>Grade</label>
                    <TextInput placeholder='Grade' id='grade' name='grade' />
                </div>
                <div id='adv-search-teacher'>
                    <label htmlFor='teacher'>Teacher</label>
                    <TextInput placeholder='Teacher' id='teacher' name='teacher' />
                </div>
            </div>
            <StyledButton color={constants.color.dark}>Search</StyledButton>
        </div>
    );
}

export function Searchbar({ open=true }) {
    const [advancedOpen, setAdvancedOpen] = useState(false);

    const useStyles = makeStyles({
        root: {
            zIndex: 98,
            display: open ? 'inherit' : 'none',
            fontFamily: constants.fontFamily.body,
            fontSize: constants.fontSize.l,
            width: '100%',
            height: 'fit-content',
            padding: '6px 0 16px',
            backgroundColor: constants.color.accentPrimary,
            color: constants.color.light,
            boxShadow: constants.boxShadow,
            textAlign: 'center',
            position: 'fixed',
            margin: '50px 0 0 0',
            '& div': {
                display: 'inline-flex',
                width: 'fit-content',
                alignItems: 'center'
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
        },
    });

    return (
        <div style={{position: 'relative', textAlign: 'center'}}>
            <div className={useStyles().root} id='basic-search'>
                <div>
                    <p>What happened in</p>
                    <TextInput label='City, Country' />
                    <p>on</p>
                    <DateInput label='Date' />
                    <p>?</p>
                    <StyledButton color={constants.color.dark}>
                        Search
                    </StyledButton>
                    <button id='open-adv-search' onClick={() => setAdvancedOpen(!advancedOpen)}>
                        {advancedOpen 
                            ? <ArrowDropUpIcon style={{color: constants.color.dark}} />
                            : <ArrowDropDownIcon style={{color: constants.color.dark}} />}
                    </button>
                </div>
            </div>
            <AdvancedSearch open={open && advancedOpen} />
        </div>
    );
}