import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import constants from '../styling/Constants';
import { TextField } from '@material-ui/core';
import { 
    KeyboardDatePicker, 
    MuiPickersUtilsProvider 
} from '@material-ui/pickers';

export function TextInput({ label, children }) {
    const useStyles = makeStyles({
        root: {
            fontFamily: constants.fontFamily.body,
            background: constants.color.light,
            borderRadius: '5px',
            height: 'fit-content'
        }
    });

    return (
        <TextField 
            variant='outlined'
            label={label} 
            className={useStyles().root}
        >
            {children}
        </TextField>
    )
}

export function DateInput() {
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker 
                variant='inline' 
                format='MM/dd/yyyy'
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
}