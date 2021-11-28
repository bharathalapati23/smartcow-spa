import React from 'react'
import PlayIconSVG from '../../Logo/playicon.svg'
import { useHistory } from 'react-router-dom'


const PlayIcon = () => {
    const history = useHistory()

    const navigateToGallery = () => {
        history.push('/gallery')
    }

    return (
        <div className="PlayIconContainer" onClick={navigateToGallery}> 
            <img src={PlayIconSVG}/>
        </div>
    )
}

export default PlayIcon
