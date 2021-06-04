import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import constants from '../styling/Constants';
import { Button } from '@material-ui/core';

export function StyledButton({
    children,
    color=constants.color.accentSecondary,
    callToAction=false,
    active=true,
    onClick=null,
    width='auto',
}) {
    const useStyles = makeStyles({
        root: {
            backgroundColor: color,
            opacity: active ? '100%' : '40%',
            color: constants.color.light,
            fontFamily: constants.fontFamily.body,
            textTransform: 'none',
            fontSize: callToAction ? constants.fontSize.s : constants.fontSize.xs,
            transition: 'opacity 300ms',
            width,
            '&:hover': {
                backgroundColor: color,
                opacity: '85%',
                transition: 'opacity 300ms',
            },
        },
    });

    return (
        <Button 
            variant='contained' disableElevation 
            className={useStyles().root} onClick={onClick}
        >
            {children}
        </Button>
    );
}