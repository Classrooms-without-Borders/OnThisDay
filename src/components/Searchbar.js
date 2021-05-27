import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import constants from '../styling/Constants';
import { TextInput, DateInput, StyledButton } from '../components';

function AdvancedSearch({ open=false }) {
    const useStyles = makeStyles({
        root: {
            zIndex: 97,
            display: open ? 'inherit' : 'none',
            fontFamily: constants.fontFamily.body,
            fontSize: constants.fontSize.s,
            height: 'fit-content',
            backgroundColor: constants.color.lightGray,
            color: constants.color.dark,
            boxShadow: constants.boxShadow,
        }
    });
}

export function Searchbar({ open=true }) {
    const advancedOpen = useState(false);

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
            '& .searchbar-btn-div': {
                display: 'grid',
                margin: '0 0 0 16px',
                '& button': {
                    margin: '28px 0 8px 0',
                }
            },
            '& a': {
                fontSize: '12px',
                textDecoration: 'underline',
                color: constants.color.dark,
            },
        },
    });

    return (
        <div className={useStyles().root}>
            <div>
                <p>What happened in</p>
                <TextInput label='City, Country' />
                <p>on</p>
                <DateInput label='Date' />
                <p>?</p>
                <div className='searchbar-btn-div'>
                    <StyledButton color={constants.color.dark}>
                        Search
                    </StyledButton>
                    <a>Advanced Search</a>
                </div>
            </div>
        </div>
    );
}