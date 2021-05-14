import React, { useState } from 'react';
import '../styling/Home.css';
import { constants } from '../styling/Constants';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Searchbar from '../components/Searchbar';
import { StyledButton } from '../components/Button';
import BigCard from '../components/BigCard';
import SmallCard from '../components/SmallCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { spacing } from '@material-ui/system';
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
            <Searchbar />

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
            {/* want to make a three row card :( */}
                <Container>
                        <Grid container>
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