
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import BannerNewsList from './BannerNewsList';
import NavbarAdmin from './NavbarAdmin';
import { Link } from 'react-router-dom';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 50 },
//     { field: 'title', headerName: 'Title', width: 240 },
//     { field: 'img', headerName: 'Image', width: 130 },
//     { field: 'video', headerName: 'Video', width: 130 },
//     { field: 'date', headerName: 'Date', width: 150 },
//     { field: 'content', headerName: 'Content', width: 320 },
// ];






export default function Dashboard() {
    const [APIData, setAPIData] = useState([])
    const baseURL = `https://6365b213046eddf1baf17d73.mockapi.io/news`;
    useEffect(() => {
        getNews()
    }, [])
    const getNews = () => {
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
    }
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
    const deleteNews = (id) => {
        fetch(`https://6365b213046eddf1baf17d73.mockapi.io/news/${id}`, {
            method: 'DELETE'
        })
            .then((result) => {
                result.json().then((response) => {
                    console.warn(response)
                    getNews()
                })
            })
    }
    return (
        <div>
            <NavbarAdmin />
            <BannerNewsList />
            <div className="dashboard">
                {/* <Container className="container_news" > */}
                {/* <Grid container spacing={1}>
                        <Grid style={{ height: 400, width: '100%', backgroundColor: 'white' }} item xs={12} lg={10}>
                            <DataGrid
                                rows={APIData}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />
                        </Grid>
                        
                    </Grid> */}
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Image</TableCell>
                                {/* <TableCell>Video</TableCell> */}
                                <TableCell>Date</TableCell>
                                {/* <TableCell>Content</TableCell> */}
                                {/* <TableCell>Action</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {APIData.map((data) => (
                                <TableRow
                                    key={data.id}
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {data.id}
                                    </TableCell>
                                    <TableCell>{data.title}</TableCell>
                                    <TableCell>{data.img}</TableCell>
                                    {/* <TableCell>{data.video}</TableCell> */}
                                    <TableCell>{data.date}</TableCell>
                                    {/* <TableCell>{data.content}</TableCell> */}
                                    <TableCell><Link to={`/update/${data.id}`}><Button><EditIcon /></Button></Link></TableCell>
                                    <TableCell><Button><DeleteIcon onClick={() => deleteNews(data.id)} /></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* </Container> */}

            </div>
        </div>
    )
}
