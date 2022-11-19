import { CardMedia } from '@mui/material'
import React from 'react'
import ferrariVideo from './assets/video/Ferrari.mp4'
export default function VideoCard() {
    return (
        <div className="videoCard">
            <video src={ferrariVideo} autoPlay loop muted />
            <div className="content">
                <h3>LaFerrari</h3>
                <h1>#ESSEREFERRARI</h1>
            </div>
        </div>
    )
}
