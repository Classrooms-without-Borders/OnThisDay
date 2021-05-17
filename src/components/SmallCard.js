import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../styling/SmallCard.css'
import stockPhoto from '../images/home-stock-image.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  //having trouble setting dimensions of card
  style: 
    {minWidth: "5000px", margin: '12px'},

}));

var cardStyle = {
  width: '450px',
  height: '466px',
  left: '64px',
  top: '761px',
  margin: 'auto',
  spacing: 8,
}

export function SmallCard({submission}) {
  const classes = useStyles();
  return (
    <div>
      { /*{submission.title}*/ }
      <Button component={Link} to="/details" color="primary">
        <Card p={1} style={cardStyle}>
              <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350"
                    image={stockPhoto}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                  <h3 className="location"> London, England</h3>
                  <h3 className="date"> 3 Apr 1944</h3>
                </CardContent>
        </Card>
      </Button>
    </div>
  );
}