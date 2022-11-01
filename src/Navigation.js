import { AppBar, Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

import navIcon1 from './assets/img/nav-icon1.svg';
import navIcon2 from './assets/img/nav-icon2.svg';
import navIcon3 from './assets/img/nav-icon3.svg';


export default function Navigation() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.addEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <AppBar position="relative" className={scrolled ? "scrolled" : ""} >
            <Container className="navbar">
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/"><Button
                            href='#home'
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button></Link>
                        <Link to="/about me">
                            <Button
                                href='#skills'
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About me
                            </Button>
                        </Link>

                        <Link to='/skills'>
                            <Button
                                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                onClick={() => onUpdateActiveLink('skills')}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Skills
                            </Button>
                        </Link>


                    </Box>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /> </a>
                            <a href="#"><img src={navIcon2} alt="" /> </a>
                            <a href="#"><img src={navIcon3} alt="" /> </a>
                        </div>
                        <span>
                            <Link to='/contact'><button className="vvd">Contact me</button></Link>
                        </span>
                    </span>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
