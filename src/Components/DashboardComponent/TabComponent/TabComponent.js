import React from 'react'
import './TabComponent.scss'
import ProfileTab from './Tabs/ProfileTab'
import MyPlanTab from './Tabs/MyPlanTab'
import BillingTab from './Tabs/BillingTab'

const TabComponent = () => {
    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (e) => {
        if (e.target.innerHTML == 'Profile') {
            if (tabValue != 0)
                setTabValue(0)
        }
        else if (e.target.innerHTML == 'My Plan') {
            if (tabValue != 1)
                setTabValue(1)
        }
        else {
            if (tabValue != 2)
                setTabValue(2)
        }
    }

    return (
        <>
            <div className="TabRoot" onClick={handleTabChange}>
                <span className={tabValue == 0 ? 'TabSelected' : ''}>Profile</span>
                <span className={tabValue == 1 ? 'TabSelected' : ''}>My Plan</span>
                <span className={tabValue == 2 ? 'TabSelected' : ''}>Billing</span>
            </div>
            <div className="TabContentRoot">
                {tabValue == 0 && <ProfileTab />}
                {tabValue == 1 && <MyPlanTab />}
                {tabValue == 2 && <BillingTab />}
            </div>
        </>
    )
}

export default TabComponent
