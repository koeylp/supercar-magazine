import { CardActionArea, Grid, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Skills } from './shared/ListOfSkills';
import React, { useState } from 'react';


export default function CategoryCard() {
    const [skills, setSkills] = useState([]);
    return (
        <section className="skills">
            <Grid container spacing={2}>
                {Skills.map((skill) =>
                    <Grid item xs={12} md={12} lg={4}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="120"
                                    image={skill.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {skill.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </section>

    )
}
