import { Alert, AlertTitle, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, Switch, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import BannerUpdate from './BannerUpdate';
import NavbarAdmin from './NavbarAdmin';

export default function Update() {
    const [APIData, setAPIData] = useState([])
    const baseUrl = `https://6365b213046eddf1baf17d73.mockapi.io/news`;
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [video, setVideo] = useState("")
    const [date, setDate] = useState("")
    const [content, setContent] = useState("")
    const [data, setData] = useState({})
    const name = useParams();


    useEffect(() => {
        fetch(baseUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setAPIData(data)
                const news = data.find(obj => {
                    return obj.id == name.id;
                });
                setData(news)
                setTitle(news.title)
                setImg(news.img)
                // setVideo(news.video)
                // setTitle(news.date)
                setContent(news.content)

            })
            .catch(error => console.log(error.message));

    }, []);



    const news = APIData.find(obj => {
        return obj.id == name.id;
    });
    console.log(news)
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    console.log(data.length)
    function refreshPage() {
        window.location.reload(false);
    }
    const formik = useFormik({
        initialValues: {
            title: "",
            img: "",
            video: "",
            date: "",
            content: "",
        },
        onSubmit: (values) => {
            // fetch(baseUrl, {
            //     method: 'PUT',
            //     body: JSON.stringify(values), headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     credentials: 'same-origin'
            // }).then(response => {
            //     if (!response.ok) {
            //         throw new Error(`HTTP Status: ${response.status}`)
            //     }
            //     return response.json()
            // })
            //     .then(data => setOpen(true))
            //     .catch(error => console.log(error.message));

        },
        validationSchema: Yup.object({
            title: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            img: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            video: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            date: Yup.string().required("Required.").min(10, "Must be true format. Ex: 2 NOVEMBER 2022"),
            content: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
        }),
    });





    const update = () => {
        let values = { title, img, content }
        fetch(`https://6365b213046eddf1baf17d73.mockapi.io/news/${name.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((result) => {
                result.json().then((response) => {
                    console.warn(response)
                })
            })
            .then(data => setOpen(true))
    }

    return (
        <div>
            <NavbarAdmin />
            <BannerUpdate />
            <div className="contact">
                {
                    APIData?.length > 0
                        ? (
                            <Container className="">
                                <Grid container spacing={2}>
                                    <Grid xs={12} md={12}>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Grid container spacing={1}>
                                                {/* ID */}
                                                <Grid xs={12} sm={12} item>
                                                    <TextField
                                                        color="secondary"
                                                        placeholder="ID"
                                                        label="ID"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="id"
                                                        value={APIData.length + 1}
                                                        onChange={formik.handleChange}
                                                        readonly
                                                        type="hidden"
                                                    />
                                                </Grid>
                                                {/* Title */}
                                                <Grid xs={12} sm={12} item>
                                                    <TextField
                                                        color="secondary"
                                                        label="Title"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="title"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.title && (<Typography variant="caption" color="red">{formik.errors.title}</Typography>)}
                                                </Grid>
                                                {/* Image */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="img"
                                                        label="URL of image"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={img}
                                                        onChange={(e) => setImg(e.target.value)}
                                                    />

                                                    <br />
                                                    {formik.errors.img && (<Typography variant="caption" color="red">{formik.errors.img}</Typography>)}
                                                </Grid>
                                                {/* Video */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="video"
                                                        label="URL of video"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={data.video}
                                                        onChange={(e) => setVideo(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.video && (<Typography variant="caption" color="red">{formik.errors.video}</Typography>)}
                                                </Grid>
                                                {/* Date */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        margin="dense"
                                                        name="date"
                                                        label="Date"
                                                        type="text"
                                                        fullWidth
                                                        variant="standard"
                                                        value={data.date}
                                                        onChange={(e) => setDate(e.target.value)}
                                                    />
                                                    <br />
                                                    {formik.errors.date && (<Typography variant="caption" color="red">{formik.errors.date}</Typography>)}
                                                </Grid>
                                                {/* Content */}
                                                <Grid item xs={12}>
                                                    <TextField
                                                        color="warning"
                                                        label="Content"
                                                        multiline
                                                        placeholder="Type your content here"
                                                        variant="outlined"
                                                        fullWidth
                                                        name='content'
                                                        rows={4}
                                                        value={content}
                                                        onChange={(e) => setContent(e.target.value)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <FormControlLabel control={<Switch />}
                                                        label="Agree to terms and conditions."
                                                        name='agree'
                                                        value={formik.values.agree} onClick={formik.handleChange}
                                                    />
                                                    {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
                                                    <Button
                                                        variant="contained" size="small" type='submit'
                                                        onClick={update}
                                                    >
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Container>
                        ) : (
                            <div className="empty">

                            </div>
                        )
                }
            </div>

            {/* Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                            <AlertTitle>Update successfully!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Button>
                    <Button
                        autoFocus
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}
