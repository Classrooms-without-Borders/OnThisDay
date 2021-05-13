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
import '../styling/SmallCard.css'


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

export default function SmallCard({submission}) {
  const classes = useStyles();
  return (
    <div>

      { /*{submission.title}*/ }
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
    </div>
    
  );
}
