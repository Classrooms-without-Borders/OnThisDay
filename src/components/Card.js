import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import constants from '../styling/Constants';
// import StudentSubmission from "../util/StudentSubmission";
import { getAllSubmissions } from '../util';
import useWindowSize from '../styling/WindowSize';

const cardImgStyle = {
    root: {
        flexGrow: 1,
    },
    media: {
        // minWidth: '100%',
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    img: {
        margin: 'auto',
        display: 'block',
        height: '100%',
        width: '100%'
        // maxWidth: '100%',
        // maxHeight: '100%',
    },
};

const CardImg = withStyles(cardImgStyle)(CardMedia);

export function BigCard({submission}) {
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
                            height='100%'
                            width='100%'
                        />
                        <CardContent>
                            <h1>{submission.date}</h1>
                            <h1>{submission.subjectName}</h1>
                            <p>By {`${submission.studentFirst} ${submission.studentLast}`}</p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

export function SmallCard({submission}) {
    const size = useWindowSize();

    const smallCardDivStyle = {
        display: 'inline-flex',
        width: size.width >= 650 ? 'calc(100% / 3 - 24px)' : '100%',
        margin: size.width >= 650 ? 0 : '16px 0px',
        marginLeft: 0,
        height: 360,
    };

    const smallCardStyle = makeStyles({
        root: {
            width: '100%',
            height: '100%',
            overflowY: 'hidden',
            borderRadius: 0,
            boxShadow: constants.boxShadow.initial,
            transition: 'box-shadow 200ms',
            '&:hover': {
                boxShadow: constants.boxShadow.hover,
                transition: 'box-shadow 200ms',
            },
        },
        content: {
            width: '100%',
            backgroundColor: "#000000",
            opacity: '70%',
            position: 'relative',
            transform: `translate(0%, -100%)`,
            padding: '23px 30px',
            margin: 0,
            '& > p': {
                margin: 0,
                textAlign: 'left',
                color: 'white',
                
            },
            '& > #location': {
                fontWeight: 700,
                fontSize: constants.fontSize.s,
            }, 
            '& > #name': {
                fontWeight: 800,
                fontSize: constants.fontSize.l,
            }
        }

    });

    return (
        <div style={smallCardDivStyle}>
            <Link to={`/details/${submission.id}`} />
                <Card className={smallCardStyle().root} >
                    <CardImg
                        component='img'
                        alt='Featured submission photo'
                        height='100%'
                        width='100%'
                    />
                </Card>
                <div className={smallCardStyle().content}>
                    <p id="location">{submission.location}</p>
                    <p id="name">{submission.subjectName}</p>
                </div>
        </div>
    );
}