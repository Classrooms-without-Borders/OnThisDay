import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import constants from '../styling/Constants';
import { Navbar,  NavItem } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Searchbar } from './Searchbar';
import { addPx } from '../util';
import useWindowSize from '../styling/WindowSize';

export let searchOpenVar;

export function Header() {
    const url = useLocation();
    const size = useWindowSize();

    // keep search open on gallery page
    const [searchOpen, setSearchOpen] = useState(
        url.pathname === '/gallery'
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
                flexDirection: size.width >= 768 ? 'row' : 'column',
                paddingTop: size.width >= 768 ? 0 : 15,
                alignItems: 'center',
                '& a': {
                    margin: '0px 12px',
                },
            },
            '& .flexbox-container': {
                display: 'flex',
                flexDirection: size.width >= 428 ? 'row' : 'column',
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
            opacity: linkName === url.pathname ? '100%' : '50%',
            fontFamily: constants.fontFamily.body,
            fontSize: size.width >= 768 ? constants.fontSize.s : constants.fontSize.xs,
            fontWeight: 'normal',
            textTransform: 'capitalize',
            margin: '0 12px',
        }
    }

    let searchbarStyle = {
        display: searchOpen ? 'inherit' : 'none',
        padding: searchOpen ? 0 : 20
    }

    // show or hide searchbars
    const onClickSearchIcon = () => {
        if (searchOpen) {
            setSearchOpen(false);
            searchOpenVar = true;
        } else {
            setSearchOpen(true);
        }
    };

    // set top margin of page content for consistency with search open
    const marginNoSearch = addPx(20, constants.size.navHeight);
    const marginWithSearch = addPx(marginNoSearch, constants.size.searchbarHeight);

    // TODO Anna: don't use document.get.. and use React virtual DOM instead
    const pageContent = document.getElementsByClassName('page-content');

    if (pageContent.length) {
        pageContent[0].style.marginTop = searchOpen ? marginWithSearch : marginNoSearch;
    }

    useEffect(() => {
        if (searchOpen) {
            searchbarStyle.display = 'inherit';

            if (pageContent.length) {
                pageContent[0].style.marginTop = marginWithSearch;
            }
        } else {
            searchbarStyle.display = 'none';
            searchbarStyle.padding = 0;

            if (pageContent.length) {
                pageContent[0].style.marginTop = marginNoSearch;
            }
        } 
    }, [searchOpen, pageContent]);

    useEffect(() => {
        if (url.pathname !== '/gallery') {
            setSearchOpen(false); 
        } else {
            setSearchOpen(true);
        }
    }, [url.pathname]);

    return (
        <div style={{display: 'block', paddingTop: searchbarStyle.padding}}>
            <Navbar className={useStyles().root}>
                <div id="header">
                    <NavItem>
                        <NavLink exact to='/'>On This Day beta</NavLink>
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
                            <NavLink to='/map' style={navlinkStyle('/map')}>Map</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/submit' style={navlinkStyle('/submit')}>Submit</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about' style={navlinkStyle('/about')}>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <a href='mailto:Programs@classroomswithoutborders.org' style={navlinkStyle('')}>
                                Contact Us
                            </a>
                        </NavItem>
                        <NavItem id='search-icon' onClick={onClickSearchIcon}>
                            <SearchIcon fontSize='default' />
                        </NavItem>
                    </div>
                </div>
            </Navbar>
            <Searchbar open={searchOpen} padding= {searchbarStyle.padding} />
        </div>
    );
}
