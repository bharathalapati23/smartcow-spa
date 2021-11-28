import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './DashboardComponent.scss'
import TabComponent from './TabComponent/TabComponent'
import { logOutUser } from '../../reduxfiles/actions/login'
import { useDispatch } from 'react-redux'

const DashboardComponent = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.login)

    useEffect(() => {
        if (!isLoggedIn)
            history.push('/')
    }, [])

    return (
        <div className='DashboardRoot'>
            <div className="TopBar">
                <div className="MyAccount">My Account</div>
                <div className="Logout" onClick={() => {
                    dispatch(logOutUser())
                    history.push('/')
                }}>Logout</div>
            </div>
            <TabComponent />
        </div>
    )
}

export default DashboardComponent
