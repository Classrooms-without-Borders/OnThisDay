import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SmallCard } from './Card';

export function CardGrid({ submissions }) {
    const gridStyles = makeStyles({
        root: {
            display: 'block',
            margin: 'auto',
            textAlign: 'center',
        },
    });

    const rowStyles = makeStyles({
        root: {
            display: 'inline-flex',
            flexDirection: 'row',
            flexFlow: 'row wrap',
            justifyContent: 'space-between', // TODO: make cards left align
            margin: '24px 0',
            width: '100%',
        },
    })

    const smallCards = {
        width: "20",
        objectFit: "fill"
    }

    const numRows = Math.ceil(submissions.length / 3);
    let rows = [];
    for (let rowCount = 0; rowCount < numRows; rowCount++) {
        let row = [];
        for (let subCount = rowCount * 3; subCount < rowCount * 3 + 3 && subCount < submissions.length; subCount++) {
            row.push(
                <SmallCard id="smallCards" style={smallCards} key={`grid-card-${subCount}`} submission={submissions[subCount]} />
            );
        }
        rows.push(
            <div key={`grid-row-${rowCount}`} className={rowStyles().root}>{row}</div>
        );
    }

    return (
        <div className={gridStyles().root}>
            {rows}
        </div>
    );
}