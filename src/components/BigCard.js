import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from '../images/cwb-logo-reverse-w-tagline 1.png';

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

export default function BigCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} style={{minWidth: "250px"}}>
          <Grid item style={{minWidth: "250px"}}>
            <ButtonBase className={classes.image} width={1}>
              <img className={classes.img} alt="complex" src={logo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={20} sm container style={{minWidth: "250px"}}>
            <Grid item xs container direction="column" spacing={2}  style={{minWidth: "250px"}}>
              <Grid item xs style={{minWidth: "250px"}}>
                <Typography gutterBottom variant="subtitle1"   >
                  London, England
                </Typography>
                <Typography variant="body2" gutterBottom>
                 3 April 1944
                </Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
