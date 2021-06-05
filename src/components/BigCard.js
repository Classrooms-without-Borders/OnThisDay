import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import stockPhoto from '../images/home-stock-image.png';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../styling/BigCard.css';
import { Details } from '../pages';

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
    {minWidth: "5000px"},
}));

var cardStyle = {
  width: '1411px',
  height: '666px',
  left: '64px',
  top: '247px'
}

export function BigCard() {
  return (
    <div>
      <Button component={Link} to="/details/:" color="primary">
        <Card style={cardStyle} >
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="475"
                image={stockPhoto}
                title="Contemplative Reptile"
              />
              <CardContent>
              <h3 className="location"> London, Englandddd</h3>
              <h3 className="date"> 3 Apr 1944</h3>
              <h3 className="event"> Sofka Skipwith</h3>
              <h3 className="author"> by Jane Doe</h3>
              <Details/>
            </CardContent>
          </Card>
        </Button>
    </div>
  );
}
