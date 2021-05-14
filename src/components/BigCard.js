import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import stockPhoto from '../images/home-stock-image.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import '../styling/BigCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // Redirect
} from "react-router-dom";

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

export default function BigCard() {
  const classes = useStyles();

  return (
    <div>
      <Button component={Link} to="/details" color="primary">
        <Card style={cardStyle} >
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="475"
                image={stockPhoto}
                title="Contemplative Reptile"
              />
              <CardContent>
              <h3 className="location"> London, England</h3>

              <h3 className="date"> 3 Apr 1944</h3>

              <h3 className="event"> Sofka Skipwith</h3>

              <h3 className="author"> by Jane Doe</h3>

            </CardContent>

          </Card>
        </Button>

    </div>
   

      
      

    
  );
}
