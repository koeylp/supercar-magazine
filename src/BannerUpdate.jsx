import { Container, Grid } from "@mui/material";

export default function BannerUpdate() {
    return (
        <section className="banner_update">
            <Container>
                <Grid container spacing={1}>
                    <Grid xs={12} md={7}>
                        <h1>Update news</h1>
                        <p></p>
                    </Grid>
                    <Grid xs={12} md={5}>

                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

