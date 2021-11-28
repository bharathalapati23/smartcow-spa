import React from 'react'
import logo from '../../Logo/logo.svg';
import './Sidebar.scss';
import VideoIcon from './VideoIcon'
import PlayIcon from './PlayIcon'
import { useSelector } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom'


const Sidebar = () => {
    const isLoggedIn = useSelector(state => state.login)
    const history = useHistory()

    const navigateToDashboard = () => {
        history.push('/dashboard')
    }

    const navigateToVideoEdit = () => {
        history.push('/video-edit')
    }

    const navigateToGallery = () => {
        history.push('/gallery')
    }

    return (
        <div className="Sidebar">
            <div>
                <img src={logo} className="logoImg" />
                {isLoggedIn && <VideoIcon onClick={navigateToVideoEdit} />}
                {isLoggedIn && <PlayIcon onClick={navigateToGallery} />}
            </div>
            <div>
                {isLoggedIn &&
                    <Avatar alt="Remy Sharp" src="https://hoopshype.com/wp-content/uploads/sites/92/2021/10/i_ad_30_e8_lebron-james.png?w=1000&h=600&crop=1"
                        onClick={navigateToDashboard} />}
            </div>
        </div>
    )
}

export default Sidebar
