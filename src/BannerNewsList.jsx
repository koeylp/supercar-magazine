import { Container, Grid } from "@mui/material";

export default function BannerNewsList() {
    return (
        <section className="banner_news_list">
            <Container>
                <Grid container spacing={1}>
                    <Grid xs={12} md={7}>
                        <h1>NEWS LIST</h1>
                        <p></p>
                    </Grid>
                    <Grid xs={12} md={5}>

                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

