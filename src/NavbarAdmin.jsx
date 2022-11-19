import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { UserAuth } from './context/AuthContext';

export default function NavbarAdmin() {
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
    const { user, logOut } = UserAuth();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div className={scrolled ? "scrolled" : "navbar"}>
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
                    {/* <Link to='/'>
                        <Button
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="/news_presentation"><Button
                        // href='#news'
                        className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('home')}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        News
                    </Button>
                    </Link> */}
                    <Link to='/dashboard'>
                        <Button
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Dashboard
                        </Button>
                    </Link>
                    <Link to="/news_add">
                        <Button
                            href='#skills'
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Add news
                        </Button>
                    </Link>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    {user?.displayName ? (
                        <div>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user.email} src={user.photoURL} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" ><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Typography>
                                </MenuItem>
                                <MenuItem>
                                    <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <span className="navbar-text">
                            <div className="social-icon">
                                <Link style={{ float: 'right', marginRight: '0' }} to="/login"><LoginIcon /></Link>
                            </div>
                        </span>
                    )}


                </Box>
            </Toolbar>
        </div>
    )
}
