import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BannerNews from './BannerNews'
import Navigation from './Navigation'

export default function NewsPresentation() {
    const [APIData, setAPIData] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(6)
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

    const loadMore = () => {
        setItemsPerPage(itemsPerPage + 6)
    }

    return (
        <div>
            <Navigation />
            <BannerNews />
            <div className="news_presentation">
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

                        {APIData.slice(0, itemsPerPage).map((data) =>
                        (
                            <Grid className="grid_list_news" items sm={12} md={12} >
                                <Card className="component_news" sx={{ display: 'flex' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: "80vh" }}
                                        image={data.img}
                                    />
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
                            <Button onClick={() => loadMore()}><span>LOAD MORE</span></Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>

    )
}
