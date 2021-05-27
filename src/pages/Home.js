import React from 'react';
import '../styling/Home.css';
import {
    Header,
    BigCard,
    SmallCard,
} from '../components';
import { 
    Grid, 
    Container,
    Box,
} from '@material-ui/core';

function Home() {
    return (
        <div> 
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
            {/* want to make a three row card :( */}
                <Container>
                        <Grid container>
                        <div className="flexbox-container">
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