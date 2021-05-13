import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { DateFnsUtils } from 'date-fns';
import constants from '../styling/Constants';
import { TextField } from '@material-ui/core';
import { 
    DatePicker, 
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

//export function DateInput({ children }) {
//    return (
//        <MuiPickersUtilsProvider utils={DateFnsUtils}>
//            <DatePicker variant='outlined' format='MM/dd/yyyy'>
//                {children}
//            </DatePicker>
//        </MuiPickersUtilsProvider>
//    );
//}