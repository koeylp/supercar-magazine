import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Navigation from './Navigation';
import VideoCard from './VideoCard';

export default function News() {
    const [APIData, setAPIData] = useState([])
    const baseURL = `https://6365b213046eddf1baf17d73.mockapi.io/news`;
    useEffect(() => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setAPIData(data)
            })
            .catch(error => console.log(error.message));

    }, []);
    console.log(APIData);
    return (
        <div className="home">
            <Navigation />
            <Banner />
            <VideoCard />
            <div className="news">
                <Container className="container_news">
                    <Grid className="grid_container_news" container spacing={1}>
                        <Typography className="h5_news" component="div" variant="h5">
                            NEWS
                        </Typography>
                        <Grid className="grid_h1_news" items sm={12} md={12}>
                            <Typography id="news" className="h1_news" component="div" variant="h1">
                                THE WORLD OF CARS
                            </Typography>
                        </Grid>
                        {/* <Grid className="grid_img component_content_news" container sm={12} md={12}>
                            <img src={bannerNews} />

                        </Grid> */}

                        {APIData.slice(0, 3).map((data) =>
                        (
                            <Grid className="grid_list_news" items sm={12} md={12} >
                                <Card className="component_news" sx={{ display: 'flex' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: "80vh" }}
                                        image={data.img}
                                    />
                                    {/* {console.log(data.title)} */}
                                    <Box className="component_content_news" sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography className="date_news" component="div" variant="h7">
                                                {data.date}
                                            </Typography>
                                            <Typography className="title_news" component="div" variant="h4">
                                                {data.title}
                                            </Typography>
                                            <Button type="button"><Link className="link_button" to={`/news_detail/${data.id}`}><span>Read More</span></Link></Button>
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                        )}

                        <Grid className="grid_button" items sm={12} md={12}>
                            <Button><Link className="link_button" to="/news_presentation"><span>SEE ALL</span></Link></Button>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </div>

    )

}
