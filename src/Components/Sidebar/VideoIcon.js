import React from 'react'
import VideoIconSVG from '../../Logo/videoicon.svg'
import { useHistory } from 'react-router-dom'


const VideoIcon = () => {
    const history = useHistory()

    const navigateToVideoEdit = () => {
        history.push('/video-edit')
    }

    return (
        <div className="VideoIconContainer" onClick={navigateToVideoEdit}>
            <img src={VideoIconSVG}/>
        </div>
    )
}

export default VideoIcon
