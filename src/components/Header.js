import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import constants from '../styling/Constants';
import { Navbar,  NavItem } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Searchbar } from './Searchbar';

export function Header() {
    const location = useLocation();

    // keep search permanently open on home page
    const [searchOpen, setSearchOpen] = useState(
        location.pathname === '/'
    );

    const useStyles = makeStyles({
        root: {
            top: 0,
            backgroundColor: constants.color.dark,
            boxShadow: constants.boxShadow,
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
            searchbarStyle.display = 'inherit'
        } else {
            searchbarStyle.display = 'none'
        }
    }, [searchOpen]);

    return (
        <div style={{display: 'block'}}>
            <Navbar className={useStyles().root}>
                <div>
                    <NavItem>
                        <NavLink exact to='/'>On This Day in History</NavLink>
                    </NavItem>
                    <div className="flexbox-container">
                        <NavItem>
                            <NavLink exact to='/' style={navlinkStyle('/')}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/gallery' style={navlinkStyle('/gallery')}>Gallery</NavLink>
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