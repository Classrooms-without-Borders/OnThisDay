import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import constants from '../styling/Constants';
import StudentSubmission from "../util/StudentSubmission";
import { getAllSubmissions } from '../util';
import { Translate } from '@material-ui/icons';

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

export function BigCard({id, location, subjectName, studentFirst, studentLast, eventDate}) {
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
    console.log("finally " + subjectName);

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
                <h2>{}</h2>
                            <h1>{subjectName}</h1>
                            <p>{studentFirst}</p>
                    <Card className={bigCardStyle().root}>
                        <CardImg
                            component='img'

                            height='100%'
                            width='100%'
                            
                        />
                        <CardContent>
                            <h1>{}</h1>
                            <h1>{}</h1>
                            <p>{}</p>
                          
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    Card: {
        width: '100%',
        height: '360px',
        borderRadius: 0,
        boxShadow: constants.boxShadow.initial,
        transition: 'box-shadow 200ms',
        '&:hover': {
            boxShadow: constants.boxShadow.hover,
            transition: 'box-shadow 200ms',
        }
      },
      Media: {
        height: '360px',
        width: '100%',
        // objectFit: 'fill'
      }
}));

export function SmallCard({submission}) {
    const classes = useStyles;
    const smallCardDivStyle = {
        display: 'inline-flex',
        width: 'calc(100% / 3 - 24px)',
        marginLeft: 0,
    };

    

    const smallCardStyle = makeStyles({
        root: {
            width: '100%',
            height: '60%',
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
    var r = Math.floor(Math.random() * 100) + 1;
    return (
        <div style={smallCardDivStyle}>
            <Link to={`/details/${r}`} />

            {/* TODO: redirect to appropriate URL */}
            {/* TODO: make image stretch to fit container */}
            {/* <Card className={smallCardStyle().root}>
                <CardMedia
                        component='img'
                        className={classes.Media}
                        image={submission.images[0]}
                        alt='Featured submission photo'
                />
            </Card> */}
                <Card className={smallCardStyle().root} >
                    <CardImg
                        component='img'
                        alt='Featured submission photo'
                        height='100%'
                        width='100%'
                        image={submission.images[0]}
                    />
                </Card>
                <div className={smallCardStyle().content}>
                    <p id="location">{submission.location}</p>
                    <p id="name">{submission.subjectName}</p>
                </div>
        </div>
    );
}