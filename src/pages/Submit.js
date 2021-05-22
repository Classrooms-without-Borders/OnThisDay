import React, { Component } from 'react';
import '../styling/Submit.css'
import { 
    Button, 
    Accordion, 
    AccordionSummary,
    Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { Header } from '../components';
//import Fab from '@material-ui/core/Fab';
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ColoredAccordion = withStyles({
    root: {
        backgroundColor: '#1b4441c2',
        fontSize: '20px',
        color: '#66FCF1'



    },
})(Accordion);



class Submit extends Component {
    // classes = useStyles();

    constructor() {
        super();
        this.state = {
          
        };
     
    }

    //<p style={{ textAlign: 'left', fontSize: '20px', color: '#66FCF1' }}>Model Parameters</p>
    render() {
        const { jobId, loading } = this.state;

        // no timeseries: replace with simulation timeseries
        return (
            <div className='GreenBackground'>
                <Header active='Submit' />
                <h2>Welcome to submit page</h2>
                <Grid container spacing={3}>
                <Grid item xs={6}>
                <div>
                    <div className='GreenBackground'>
                            <h3>Submit an Entry</h3>
                            <ColoredAccordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="Model Param-content"
                                  id="Model Param-header"
                              >
                                About You
                              </AccordionSummary>
                            </ColoredAccordion>
                            <br></br>
                            <ColoredAccordion>
                              <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="Intervention Policy-content"
                                  id="Intervention Policy-header"
                              >
                                About your post
                              </AccordionSummary>
                            </ColoredAccordion>

                            <br></br>

                            <Button variant="contained" color="primary" className='button' onClick={this.handleOnClick}>
                                Submit
                            </Button>
                        </div>
                    </div>

                    <div>
                        {jobId ? (loading ? <p>loading...</p> :
                            <div className='GreenBackground'>
                                <h3>Analysis</h3>
                            </div>)
                            : null}
                    </div>
                     </Grid>
                 <Grid item xs={6}>
                    <div className='GreenBackground'>
                        <h3>Another heading</h3>
                    </div>

                    
                </Grid>
                </Grid>
                <div className='fab'>
                </div>
            </div>
        );
    }

}

export default Submit;
