import React from 'react';
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

export function TextInput({ label, children, defaultValue }) {
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

export function DateInput() {
    const [selectedDate, setSelectedDate] = React.useState(null);

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
                format='MMM d, yyyy'
                label='Date'
                onChange={handleDateChange}
                value={selectedDate}
                className={useStyles().root}
                maxDate={new Date(1950, 12, 31)}
                maxDateMessage='Please choose a date in 1950 or earlier'
                minDate={new Date(1925, 1, 1)}
                minDateMessage='Please choose a date in 1925 or later'
                disableFuture={true}
                inputProps={{ readOnly: true }}
                shouldCloseOnSelect={false}
            />
        </MuiPickersUtilsProvider>
    );
}