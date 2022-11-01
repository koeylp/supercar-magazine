import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function ImgMediaCard() {
    return (
        <Grid container>
            <Grid item lg={5}>
                <Card>
                    <CardMedia
                        component="img"
                        alt="green iguana"

                        image="https://1-grid.com/blogs/wp-content/uploads/2020/03/careers-in-tech-what-is-a-web-developer--1280x640.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You give computers instructions in what is known as 'code', in a similar way to how you might have a recipe for how to cook something. You tell the computer about elements it needs to work with (like the ingredients), you give it instructions, and there might be some conditions it needs to choose between (like choosing whether an oven is electric or gas and then following the corresponding temperature).
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid >

    );
}
