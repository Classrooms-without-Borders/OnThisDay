import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SmallCard } from './Card';

export function CardGrid({ submissions }) {
    const numRows = Math.ceil(submissions.length / 3);

    const gridStyles = makeStyles({
        root: {
            display: 'block',
            maxWidth: '1500px',
            margin: 'auto',
        },
    });

    const rowStyles = makeStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            flexFlow: 'row wrap',
            justifyContent: 'space-between',
            margin: '24px auto',
            width: 'calc(100% - 120px)',
        },
    })

    let rows = [];
    for (let i = 0; i < numRows; i += 3) {
        let row = [];
        for (let j = i; j < i + 3; j++) {
            if (j < submissions.length) {
                row.push(
                    <SmallCard key={`grid-card-${j}`} submission={submissions[j]} />
                )
            }
        }
        rows.push(
            <div key={`grid-row-${i/3}`} className={rowStyles().root}>{row}</div>
        )
    }

    return (
        <div className={gridStyles().root}>{rows}</div>
    );
}