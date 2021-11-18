import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import constants from '../styling/Constants';
import { TextField } from '@material-ui/core';
import { 
    KeyboardDatePicker, 
    MuiPickersUtilsProvider 
} from '@material-ui/pickers';

const useStyles = makeStyles({
    root: {
        background: constants.color.light,
        borderRadius: '5px',
        height: 'fit-content',
        '& input': {
            padding: '10px',
            fontFamily: constants.fontFamily.body,
            textAlign: 'left',
        },
        '& label': {
            fontFamily: constants.fontFamily.body,
        },
        '& label.Mui-focused': {
            color: constants.color.dark,
        },
        '& .MuiInputBase-root': {
            margin: '0',
        },
    },
});

export function TextInput({ label, children, defaultValue='' }) {
    const StyledTextField = withStyles({
        root: {
            '& .MuiInput-underline:after': {
                borderBottomColor: constants.color.dark,
                borderWidth: '1px',
            },
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: constants.color.dark,
                },
                '&.Mui-focused fieldset': {
                    borderColor: constants.color.dark,
                    borderWidth: '2px',
                },
            },
        },
    })(TextField);

    return (
        <StyledTextField 
            variant='outlined'
            label={label} 
            defaultValue={defaultValue}
            className={useStyles().root}
            size='small'
        >
            {children}
        </StyledTextField>
    );
}

/**
 * Datepicker component.
 * We set the default for defaultDate to be Dec 1, 1934 since 
 * this ends up rendering as Jan 1, 1935 in the display.
 * @param {Date} defaultDate date to display in datepicker. 
 * @returns Datepicker component
 */
export function DateInput({ defaultDate=new Date(1934, 12, 1) }) {
    const [selectedDate, setSelectedDate] = useState(defaultDate);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const StyledDatePicker = withStyles({
        root: {
            width: '180px',
            '& label': {
                top: '-10px',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: constants.color.dark,
            },
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: constants.color.dark,
                },
                '&.Mui-focused fieldset': {
                    borderColor: constants.color.dark,
                },
            },
        },
    })(KeyboardDatePicker);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDatePicker
                variant='inline' 
                format='dd-MM-yyyy'
                placeholder='DD-MM-YYYY'
                onChange={handleDateChange}
                value={selectedDate}
                invalidDateMessage=''
                className={useStyles().root}
                maxDate={new Date(1950, 12, 31)}
                minDate={new Date(1925, 1, 1)}
            />
        </MuiPickersUtilsProvider>
    );
}