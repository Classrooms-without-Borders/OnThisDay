import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import constants from '../styling/Constants';
import { Navbar,  Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header(props) {
    const [showSearchIcon, setShowSearchIcon] = useState(false);
    const [basicSearchOpen, setBasicSearchOpen] = useState(true);
    const [advSearchOpen, setAdvSearchOpen] = useState(false);

    const searchOpen = () => basicSearchOpen || advSearchOpen;

    const useStyles = makeStyles({
        root: {
            backgroundColor: constants.color.dark,
            boxShadow: constants.boxShadow,
            zIndex: 1,
            width: '100%',
            position: 'fixed',
            '& > div': {
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'center',
                '& a': {
                    margin: '0 0 0 18px',
                },
            },
            '& .flexbox-container': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& a': {
                    fontFamily: constants.fontFamily.body,
                    fontWeight: 'normal',
                    textTransform: 'capitalize',
                    margin: '0 12px',
                },
            },
            '& li': {
                listStyleType: 'none',
                '& a': {
                    textDecoration: 'none',
                    color: constants.color.light,
                    fontFamily: constants.fontFamily.header,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: constants.fontSize.s,
                },
            },
            '& #search-icon': {
                color: constants.color.light,
                backgroundColor: searchOpen() 
                    ? constants.color.accentPrimary 
                    : constants.color.dark,
                padding: '12px 18px',
                margin: '0 0 0 6px',
            },
        },
    });

    const onClickSearch = () => {
        if (searchOpen()) {
            setBasicSearchOpen(false);
            setAdvSearchOpen(false);
        } else {
            setBasicSearchOpen(true);
        }
    };

    const toggleSearchType = () => {
        if (advSearchOpen) {
            basicSearchOpen = true;
            advSearchOpen = false;
        } else {
            basicSearchOpen = false;
            advSearchOpen = true;
        }
    };

    return (
        <Navbar className={useStyles().root}>
            <div>
                <NavItem>
                    <NavLink exact to='/'>On This Day in History</NavLink>
                </NavItem>
                <div className="flexbox-container">
                    <NavItem>
                        <NavLink exact to='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/gallery'>Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/submit'>Submit</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem id='search-icon'>
                        <SearchIcon fontSize="medium" onClick={onClickSearch} />
                    </NavItem>
                </div>   
            </div>
        </Navbar>
    );
}

export default Header;