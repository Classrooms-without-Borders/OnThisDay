import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../styling/Constants';
import useWindowSize from '../styling/WindowSize';
import { dateToString } from '../util';

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
            textAlign: 'left',
            '&:hover': {
                boxShadow: constants.boxShadow.hover,
                transition: 'box-shadow 200ms',
            },
            '& .MuiCardContent-root': {
                color: constants.color.light,
                backgroundColor: '#000000',
                opacity: '70%',
                position: 'relative',
                transform: `translate(-100%, 0%)`,
                padding: '36px',
            },
            '& img': {
                objectFit: 'cover',
                width: '100%'
            },
            '& h1': {
                fontFamily: constants.fontFamily.header,
                textTransform: 'uppercase',
                fontSize: constants.fontSize.xl,
                fontWeight: 'bold',
            },
            '& #bigcard-name': {
                color: constants.color.lightAccentPrimary,
            },
            '& h2': {
                fontFamily: constants.fontFamily.header,
                fontSize: constants.fontSize.s,
                fontWeight: 'bold',
            }
        },
    });

    return (
        <div style={{width: '100%', textAlign: 'center'}}>
            <div style={{width: '100%', margin: '0 auto'}}>
                <Link to={{
                    pathname: `/details/${submission.id}`,
                    submission: submission
                }}>
                    <Card className={bigCardStyle().root}>
                        <img src={submission.images[0]} alt='Featured submission'></img>
                        <CardContent>
                            <h2 id='bigcard-location'>{submission.location}</h2>
                            <h1 id='bigcard-date'>{dateToString(submission.eventDate)}</h1>
                            <h1 id='bigcard-name'>{submission.subjectName}</h1>
                            <p>By {submission.studentName}</p>
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
            padding: '24px 28px',
            margin: 0,
            '& > p': {
                margin: 0,
                textAlign: 'left',
                color: 'white',
                
            },
            '& > #location': {
                fontWeight: 'bold',
                fontSize: constants.fontSize.s,
                fontFamily: constants.fontFamily.header,
            }, 
            '& > #date': {
                fontWeight: 'bold',
                fontSize: constants.fontSize.xl,
                fontFamily: constants.fontFamily.header,
                textTransform: 'uppercase',
            }
        }
    });

    return (
        <div style={smallCardDivStyle}>
            <Link to={{
                pathname: `/details/${submission.id}`,
                submission: submission
            }}>
                <Card className={smallCardStyle().root} >
                    <img src={submission.images[0]} alt='Featured submission'></img>
                </Card>
                <div className={smallCardStyle().content}>
                    <p id="location">{submission.location}</p>
                    <p id="date">{dateToString(submission.eventDate)}</p>
                </div>
            </Link>
        </div>
    );
}