import React, { useState } from 'react';
import '../styling/Home.css';
import { constants } from '../styling/Constants';
import {
    Header,
    Footer,
    StyledButton,
    BigCard,
    SmallCard,
} from '../components';
import { 
    Grid, 
    Container,
    Box,
} from '@material-ui/core';

function Home() {
    const style = {
        'text-align': 'center'
    }
    const smallDivStyle = {
        'display': 'flex',
        'margin': '12px'
    }

    return (
        <div style={style}>
            <Header active='Home'/>

            {/* item xs, md changes width length of paper */}
            <Container>
                <Grid container style={{overflow: 'hidden'}}>
                    <Box m={2} pt={3}>
                        <Grid item xs={8}>
                            <BigCard></BigCard>
                        </Grid>
                    </Box>
                </Grid>
            </Container>
            <br></br>
            {/* want to make a three row card :( */}
                <Container>
                        <Grid container style={{overflow: 'hidden'}}>
                        <div class="flexbox-container">
                                <Box m={2} pt={3}>
                                    <Grid  p={2} item md={4}>
                                        <SmallCard p={2} ></SmallCard>
                                    </Grid>
                                </Box>
                                <Box m={2} pt={3}>
                                    <Grid  p={2} item md={4}>
                                        <SmallCard p={2} ></SmallCard>
                                    </Grid>
                                </Box>
                                <Box m={2} pt={3}>
                                    <Grid  p={2} item md={4}>
                                        <SmallCard p={2} ></SmallCard>
                                    </Grid>
                                </Box>
                            </div>
                            
                        </Grid>
                </Container>
                <br></br>
                <br></br>
        </div>
    )
}


export default Home;