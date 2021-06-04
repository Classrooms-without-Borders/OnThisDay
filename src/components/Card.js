import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import constants from '../styling/Constants';

const cardImgStyle = {
    root: {
        flexGrow: 1,
    },
    paper: {
        margin: 'auto',
        maxWidth: '500px',
    },
    media: {
        minWidth: '100%',
    },
    image: {
        objectFit: 'cover',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
};

const CardImg = withStyles(cardImgStyle)(CardMedia);

export function BigCard({ submission }) {
    const bigCardStyle = makeStyles({
        root: {
            display: 'flex',
            position: 'relative',
            height: '400px',
            minHeight: 'fit-content',
            borderRadius: 0,
            boxShadow: constants.boxShadow.initial,
            transition: 'box-shadow 200ms',
            '&:hover': {
                boxShadow: constants.boxShadow.hover,
                transition: 'box-shadow 200ms',
            },
            '& .MuiCardContent-root': {
                zIndex: 99,
                color: constants.color.light,
                left: 0, // TODO: style card info within display
            },
        },
    });

    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{width: '100%', margin: '0 auto'}}>
                <Link to='/details'> {/* TODO: redirect to appropriate URL */}
                    <Card className={bigCardStyle().root}>
                        <CardImg
                            component='img'
                            alt={`Featured submission photo of ${submission.subjectName}`}
                            height='100%'
                            width='100%'
                            image={submission.images[0]}
                        />
                        <CardContent>
                            <h2>{submission.location}</h2>
                            <h1>{submission.date}</h1>
                            <h1>{submission.subjectName}</h1>
                            <p>{submission.submitterName}</p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

export function SmallCard({submission}) {
    const smallCardDivStyle = {
        display: 'inline-flex',
        width: 'calc(100% / 3 - 24px)',
        marginLeft: 0,
    };

    const smallCardStyle = makeStyles({
        root: {
            width: '100%',
            height: '360px',
            borderRadius: 0,
            boxShadow: constants.boxShadow.initial,
            transition: 'box-shadow 200ms',
            '&:hover': {
                boxShadow: constants.boxShadow.hover,
                transition: 'box-shadow 200ms',
            },
        },
    });

    return (
        <div style={smallCardDivStyle}>
            <Link to='/details'> {/* TODO: redirect to appropriate URL */}
                <Card className={smallCardStyle().root}>
                    <CardImg
                        component='img'
                        alt='Featured submission photo'
                        height='100%'
                        width='100%'
                        image={submission.images[0]}
                    />
                </Card>
            </Link>
        </div>
    );
}