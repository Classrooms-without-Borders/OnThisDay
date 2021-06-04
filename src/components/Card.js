import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@material-ui/core';
import constants from '../styling/Constants';

const cardImgStyle = {
    root: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    media: {
        minWidth: '100%',
    },
    img: {
        objectFit: 'cover',
    },
};

const CardImg = withStyles(cardImgStyle)(CardMedia);

export function BigCard({ submission }) {
    const bigCardStyle = {
        width: 'calc(100% - 120px)',
        maxWidth: '1500px',
        margin: '60px auto',
        height: '40vh',
        minHeight: 'fit-content',
        borderRadius: 0,
        boxShadow: constants.boxShadow,
    };

    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <Link to='/details'> {/* TODO: redirect to appropriate URL */}
                <Card style={bigCardStyle}>
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

export function SmallCard({submission}) {
    const smallCardDivStyle = {
        display: 'inline-flex',
        margin: 'auto',
    }

    const smallCardStyle = {
        width: '100%',
        height: '40vh',
        maxHeight: '600px',
        borderRadius: 0,
        boxShadow: constants.boxShadow,
    };

    return (
        <div style={smallCardDivStyle}>
            <Link to='/details'> {/* TODO: redirect to appropriate URL */}
                <Card style={smallCardStyle}>
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