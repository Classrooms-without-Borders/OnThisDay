import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import './Home.css';

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <div className="image-box">
                    <div className="header-text">
                        <h1>Classwoom without Borders</h1>
                        <Button className="Button" variant="contained" color="primary" href="/simulator">
                            Sample button
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;