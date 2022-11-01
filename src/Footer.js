import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import navIcon1 from './assets/img/nav-icon1.svg';
import navIcon2 from './assets/img/nav-icon2.svg';
import navIcon3 from './assets/img/nav-icon3.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Grid container spacing={1} className="align-item-center">
                    <Grid xs={12} md={5} className="text-center text-sm-end">
                        <div className="social-icon">
                            {/* <a href=""><img src={navIcon1}></img> </a>
                            <a href=""><img src={navIcon2}></img> </a>
                            <a href=""><img src={navIcon3}></img> </a> */}
                        </div>
                        <p>CopyRight 2022</p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
