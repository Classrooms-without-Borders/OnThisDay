import React, {Component} from 'react';
import { Navbar,  Nav, Collapse, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import '../styling/Header.css';
import SearchIcon from '@material-ui/icons/Search';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
 
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    handleClick() {
        console.log("Search icon works"); //logs Observer class instance
      }


    render(){

        const styleSheet = {
            color: "white"
           
        }

        const active={
            color:'#FFFFFF', 
            borderBottom: '1px solid #66FCF1', 
            paddingBottom: '4px', 
            font: 'Roboto',
            background:'red',
    
        }

        return (
            

            <Navbar className="color">
                <div className="container">

            
             

                    <div class="flexbox-container">
                        <div>
                            <NavItem>
                                <NavLink className="Nav-link" to='/home' activeClassName='active' activeStyle={active} style={styleSheet}> Home</NavLink>
                            </NavItem>
                        </div>

                        <div>
                            <NavItem>
                                <NavLink className="Nav-link" to='/gallery' activeClassName='active' activeStyle={active} style={styleSheet}>Gallery</NavLink>
                            </NavItem>
                        </div>
                        <div>
                            <NavItem>
                                <NavLink className="Nav-link" to='/submit' activeClassName='active' activeStyle={active} style={styleSheet}>Submit</NavLink>
                            </NavItem>
                        </div>
                        <div>
                            <NavItem>
                                <NavLink className="Nav-link"  to='/about' activeClassName='active' activeStyle={active} style={styleSheet}> About</NavLink>
                            </NavItem>
                        </div>

                        <div class="right-align">
                            <SearchIcon color="secondary" fontSize="large" onClick={this.handleClick} />
                        </div>
                        <div>
                            <NavItem>
                                <NavLink className="Nav-link"  to='/login' activeClassName='active' activeStyle={active} style={styleSheet}> Log In </NavLink>
                            </NavItem>
                        </div>
                           
                    </div>   
                    
           
                </div>
            </Navbar>
            
        );
    }
}

export default Header;
