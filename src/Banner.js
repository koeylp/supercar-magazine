import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import headerImg from './assets/img/astrounaut-header.png';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Le The Khoi', 'Web developer'];
    const [text, setText] = useState('');
    const period = 2000;
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <section className="banner">
            <Container>
                <Grid container spacing={1}>
                    <Grid xs={12} md={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi i'm `}<span className="wrap">{text}</span></h1>
                        <p></p>
                    </Grid>
                    <Grid xs={12} md={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

