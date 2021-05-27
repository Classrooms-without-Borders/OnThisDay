import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, Header } from '../components';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  
function Gallery(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };
  
    return (
      <Timeline/>
    );
  }


  export default Gallery;