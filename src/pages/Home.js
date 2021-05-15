import React, { useState } from 'react';
import '../styling/Home.css';
import { constants } from '../styling/Constants';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { StyledButton } from '../components/Button';
import BigCard from '../components/BigCard';
import SmallCard from '../components/SmallCard';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

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
                <Grid container>
                    <Box m={2} pt={3}>

                        <Grid item xs={12}>

                            <BigCard></BigCard>

                        </Grid>
                    </Box>

                </Grid>
            </Container>
            <br></br>
            <div class="flexbox-container">
            {/* want to make a three row card :( */}
            <Container>
                    <Grid container>
                        <Box m={2} pt={1}>
                            <Grid  p={2} item md={4}>
                                <SmallCard p={2} ></SmallCard>
                            </Grid>
                        </Box>
                        <Box m={2} pt={1}>
                            <Grid  p={2} item md={4}>
                                <SmallCard p={2} ></SmallCard>
                            </Grid>
                        </Box>
                        <Box m={2} pt={1}>
                            <Grid  p={2} item md={4}>
                                <SmallCard p={2} ></SmallCard>
                            </Grid>
                        </Box>
                        
                    </Grid>
            </Container>
            </div>
        </div>
    )
}


export default Home;