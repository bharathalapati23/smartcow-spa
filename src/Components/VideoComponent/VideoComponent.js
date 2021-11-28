import React from 'react'
import './VideoComponent.scss'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'
import ConfigurationTabComponent from './ConfigurationTabComponent/ConfigurationTabComponent'
import PreviewComponent from './PreviewComponent/PreviewComponent'
import { setDisplayPic } from '../../reduxfiles/actions/displayPic'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


const VideoComponent = () => {
    const [selectedImage, setSelectedImage] = React.useState(0)
    const history = useHistory()

    const dispatch = useDispatch()
    const reduxSelectedImage = useSelector((state) => state.displayPic)
    const isLoggedIn = useSelector(state => state.login)

    React.useEffect(() => {
        if(!isLoggedIn)
            history.push('/')
    }, [])

    React.useEffect(() => {
        setSelectedImage(reduxSelectedImage)
    }, [reduxSelectedImage])

    return (
        <div className='DashboardRoot'>
            <div className="TopBar">
                <div className="MyAccount">Saying Hi to my customers</div>
                <div>
                    <CustomButton style={{ width: "123px", marginRight: '5px' }}>Cancel</CustomButton>
                    <CustomButton style={{ width: "123px" }}
                        onClick={() => {
                            dispatch(setDisplayPic(selectedImage))
                        }}>
                        Save
                    </CustomButton>
                </div>
            </div>
            <div className="Video-Content-Root">
                <div style={{ width: '50%' }}>
                    <PreviewComponent selectedImage={selectedImage} />
                </div>
                <div style={{ width: '50%' }}>
                    <ConfigurationTabComponent setSelectedImage={setSelectedImage} />
                </div>
            </div>
        </div>
    )
}

export default VideoComponent
