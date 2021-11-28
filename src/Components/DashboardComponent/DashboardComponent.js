import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './DashboardComponent.scss'
import TabComponent from './TabComponent/TabComponent'

const DashboardComponent = () => {
    const history = useHistory()
    const isLoggedIn = useSelector(state => state.login)

    useEffect(() => {
        if(!isLoggedIn)
            history.push('/')
    }, [])

    return (
        <div className='DashboardRoot'>
            <div className="TopBar">
                <div className="MyAccount">My Account</div>
                <div className="Logout">Logout</div>
            </div>
            <TabComponent />
        </div>
    )
}

export default DashboardComponent
