import React from 'react';
import './App.css';
import { Header, Footer, PrivateRoute } from './components';
import {
  Home, About, Gallery, Details, Submit, Login,
  ForgotPassword, UpdateProfile, Dashboard, Signup,
  AdminPortal, ThankYou
} from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import constants from './styling/Constants';

function App() {
    return (
        <div className="App" style={{textAlign: 'center', backgroundColor: constants.color.dark}}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/details/:submissionId" component={Details} />
                    <Route exact path="/submit" component={Submit} />
                    <Route exact path="/submit-success" component={ThankYou} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <PrivateRoute path="/admin-portal" component={AdminPortal} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;