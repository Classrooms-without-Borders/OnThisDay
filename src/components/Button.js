import React from 'react';
import { constants } from '../styling/Constants';

import { Button } from '@material-ui/core';

export function StyledButton({
    children,
    color=constants.color.accentSecondary,
    callToAction=false,
    active=true,
    onClick=null
}) {
    const style = {
        'background-color': color,
        'opacity': active ? '100%' : '40%',
        'color': constants.color.light,
        'font-family': constants.fontFamily.body,
        'text-transform': 'none',
        'font-size':  callToAction ? constants.fontSize.s
            : constants.fontSize.xs
    }

    return (
        <Button 
            variant='contained' disableElevation 
            style={style} onclick={onClick}
        >
            {children}
        </Button>
    );
}