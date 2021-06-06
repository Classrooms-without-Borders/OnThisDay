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

export function BigCard(props) {
  let mySubjectName = props.subjectName;
  let myLocation = props.location;
  let myEventDate = props.eventDate;
  let myStudentName = props.studentName;
  let myClassName = props.className;
  let myImage = props.image;


  return (
    <div>
      <Button component={Link} to="/details" color="primary">
        <Card style={cardStyle} >
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="475"
                image={myImage}
                title="Contemplative Reptile"
              />
              <CardContent>
              <h3 className="location"> {mySubjectName}</h3>
              <h3 className="date"> {myEventDate}</h3>
              <h3 className="event"> Sofka Skipwith</h3>
              <h3 className="author"> by Jane Doe</h3>
              <Details subjectName= {mySubjectName} location={myLocation} eventDate={myEventDate} studentName={myStudentName} className={myClassName} />
            </CardContent>
          </Card>
        </Button>
    </div>
  );
}
