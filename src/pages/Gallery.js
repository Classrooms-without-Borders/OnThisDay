import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Timeline from '../components/Timeline';




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