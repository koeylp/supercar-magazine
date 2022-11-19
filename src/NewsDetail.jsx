import { Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import BannerNews from './BannerNews'
import Navigation from './Navigation'

export default function NewsDetail() {
    const [APIData, setAPIData] = useState([])
    const baseURL = `https://6365b213046eddf1baf17d73.mockapi.io/pe`;
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

    const news = useParams();
    const data = APIData.find(obj => {
        return obj.id == news.id;
    });

    console.log(news.id);
    console.log(data);
    return (
        <div>
            <Navigation />
            <BannerNews />
            <div className="news_detail">
                <Container className="container_news">
                    <Grid className="grid_container_news" container spacing={1}>
                        <Typography className="h5_news" component="div" variant="h5">
                            NEWS
                        </Typography>
                        <Grid className="grid_h1_news" items sm={12} md={12}>
                            <Typography id="news" className="h1_news" component="div" variant="h1">
                                {
                                    APIData?.length > 0
                                        ? (
                                            data.title
                                        ) : (
                                            <div className="empty">

                                            </div>
                                        )
                                }
                            </Typography>
                        </Grid>

                        <Grid className="grid_img component_content_news" container sm={12} md={12}>
                            {
                                APIData?.length > 0
                                    ? (
                                        <img src={data.img} />
                                    ) : (
                                        <div className="empty">

                                        </div>
                                    )
                            }
                        </Grid>
                        <Grid className="grid_img" container sm={12} md={12}>
                            {
                                APIData?.length > 0
                                    ? (
                                        data.descrition
                                    ) : (
                                        <div className="empty">

                                        </div>
                                    )
                            }
                        </Grid>
                        <Grid className="grid_img" container sm={12} md={12}>
                            {
                                APIData?.length > 0
                                    ? (
                                        data.views
                                    ) : (
                                        <div className="empty">

                                        </div>
                                    )
                            }
                        </Grid>
                        <Grid className="component_content_news" container sm={12} md={12}>
                            {
                                APIData?.length > 0
                                    ? (
                                        <Grid className="grid_img component_content_news" container sm={12} md={12}>
                                            {data.content}
                                        </Grid>
                                    ) : (
                                        <div className="empty">

                                        </div>
                                    )
                            }
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>

    )
}
