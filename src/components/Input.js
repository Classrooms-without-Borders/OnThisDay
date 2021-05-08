import React from 'react';
//import { DateFnsUtils } from 'date-fns';
import { constants } from '../styling/Constants.js';

import { TextField } from '@material-ui/core';
import { 
    DatePicker, 
    MuiPickersUtilsProvider 
} from '@material-ui/pickers';

export function TextInput({ label, children }) {
    const style = {
        'font-family': constants.fontFamily.body,
        'background': constants.color.light,
        'border-radius': '5px',
        'height': 'fit-content',
        // todo
    }

    return (
        <TextField 
            variant='outlined' 
            label={label} 
            style={style}
            inputProps={{style: style}}
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