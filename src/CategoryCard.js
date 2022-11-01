import { CardActionArea, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function CategoryCard({ categories }) {
    console.log("categories");
    const [category, setCategory] = useState([]);
    return (
        <section className="category">
            <Grid container spacing={2}>
                {categories.map((category) => (
                    <Grid item xs={12} md={12} lg={4}>
                        <Link to={`/${category.title}`} >
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={category.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {category.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </section>

    )
}
