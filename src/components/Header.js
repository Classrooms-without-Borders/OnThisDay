import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import constants from '../styling/Constants';
import { Navbar,  NavItem } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Searchbar } from './Searchbar';

export function Header() {
    const location = useLocation();

    // keep search open on gallery page
    const [searchOpen, setSearchOpen] = useState(
        location.pathname === '/gallery'
    );

    const useStyles = makeStyles({
        root: {
            top: 0,
            backgroundColor: constants.color.dark,
            boxShadow: constants.boxShadow.initial,
            zIndex: 99,
            width: '100%',
            position: 'fixed',
            padding: 0,
            '& > div': {
                justifyContent: 'space-between',
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                '& a': {
                    margin: '0 0 0 18px',
                },
            },
            '& .flexbox-container': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            '& li': {
                listStyleType: 'none',
                '& a': {
                    textDecoration: 'none',
                    fontFamily: constants.fontFamily.header,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: constants.fontSize.s,
                    color: constants.color.light,
                }
            },
            '& #search-icon': {
                color: constants.color.light,
                opacity: searchOpen ? '100%' : '50%',
                backgroundColor: searchOpen 
                    ? constants.color.accentPrimary 
                    : constants.color.dark,
                padding: '12px 18px',
                margin: '0 0 0 6px',
                cursor: 'pointer',
            },
        },
    });

    const navlinkStyle = (linkName) => {
        return {
            color: constants.color.light,
            opacity: linkName === location.pathname ? '100%' : '50%',
            fontFamily: constants.fontFamily.body,
            fontWeight: 'normal',
            textTransform: 'capitalize',
            margin: '0 12px',
        }
    }

    let searchbarStyle = {
        display: searchOpen ? 'inherit' : 'none'
    }

    // show or hide searchbars
    const onClickSearchIcon = () => {
        if (searchOpen) {
            setSearchOpen(false);
        } else {
            setSearchOpen(true);
        }
    };

    useEffect(() => {
        if (searchOpen) {
            searchbarStyle.display = 'inherit';
            // TODO: add padding to document body to accommodate searchbar
        } else {
            searchbarStyle.display = 'none';
            // TODO: remove padding from doc body once searchbar disappears
        }
    }, [searchOpen]);

    useEffect(() => {
        if (location.pathname !== '/gallery') setSearchOpen(false); 
    }, [location.pathname]);

    return (
        <div style={{display: 'block'}}>
            <Navbar className={useStyles().root}>
                <div>
                    <NavItem>
                        <NavLink exact to='/'>On This Day</NavLink>
                    </NavItem>
                    <div className="flexbox-container">
                        <NavItem>
                            <NavLink exact to='/' style={navlinkStyle('/')}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                                to='/gallery' 
                                onClick={() => setSearchOpen(true)} 
                                style={navlinkStyle('/gallery')}>
                                    Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/submit' style={navlinkStyle('/submit')}>Submit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about' style={navlinkStyle('/about')}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/admin' style={navlinkStyle('/admin')}>Admin</NavLink>
                        </NavItem>
                        <NavItem id='search-icon' onClick={onClickSearchIcon}>
                            <SearchIcon fontSize='default' />
                        </NavItem>
                    </div>
                </div>
            </Navbar>
            <Searchbar open={searchOpen} />
        </div>
    );
}