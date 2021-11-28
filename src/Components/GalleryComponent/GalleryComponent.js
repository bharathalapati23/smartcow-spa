import React from 'react'
import './GalleryComponent.scss'
import CustomButton from '../../CustomComponents/CustomButton/CustomButton'
import CardComponent from './CardComponent/CardComponent'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const GalleryComponent = () => {
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.login)
    React.useEffect(() => {
        if(!isLoggedIn)
            history.push('/')
    }, [])


    return (
        <div className='DashboardRoot'>
            <div className="TopBar">
                <div className="MyAccount">Saved Videos</div>
                <CustomButton style={{ width: "123px" }}>Create new</CustomButton>
            </div>
            <div>
                <CardComponent />
            </div>
        </div>
    )
}

export default GalleryComponent
