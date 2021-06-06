import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import constants from '../styling/Constants';
import StudentSubmission from "../util/StudentSubmission";
import { getAllSubmissions } from '../util';

const cardImgStyle = {
    root: {
        flexGrow: 1,
    },
    media: {
        minWidth: '100%',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
};

const CardImg = withStyles(cardImgStyle)(CardMedia);

export function BigCard({ submissionParam }) {
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

    //let title = submission.eventTitle;

    const submissions = getAllSubmissions();
    if (submissions === undefined) {
        return "not working";
    }
    let threeSubmissions = []; 
    for (let i = 1; i < submissions.length; ++i) {
        threeSubmissions[i - 1] = submissions[i];
    }

    //StudentSubmission ss = submission[0];

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
                        {/*    <h2>{submission.location}</h2>
                            <h1>{submission.date}</h1>
                            <h1>{submission.subjectName}</h1>
                            <p>{submission.submitterName}</p>*/}
                          
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
                <Card className={smallCardStyle().root} >
                    <CardImg
                        component='img'
                        alt='Featured submission photo'
                        height='100%'
                        width='100%'
                        image={submission.images[0]}
                    />
                </Card>
                {submission.location}
                {submission.subjectName}
            </Link>
        </div>
    );
}