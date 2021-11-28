import React from 'react'
// import './TabComponent.scss'
import ActorTab from './ConfigurationTabs/ActorTab'
import AlignmentTab from './ConfigurationTabs/AlignmentTab'
import BackgroundTab from './ConfigurationTabs/BackgroundTab'

const ConfigurationTabComponent = ({ setSelectedImage }) => {
    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (e) => {
        if (e.target.innerHTML == 'Actor') {
            if (tabValue != 0)
                setTabValue(0)
        }
        else if (e.target.innerHTML == 'Voice') {
            if (tabValue != 1)
                setTabValue(1)
        }
        else if (e.target.innerHTML == 'Alignment') {
            if (tabValue != 2)
                setTabValue(2)
        }
        else {
            if (tabValue != 3)
                setTabValue(3)
        }
    }

    return (
        <>
            <div className="TabRoot" onClick={handleTabChange} style={{ marginBottom: '20px' }}>
                <span className={tabValue == 0 ? 'TabSelected' : 'TabNotSelected'}>Actor</span>
                <span className={tabValue == 1 ? 'TabSelected' : 'TabNotSelected'}>Voice</span>
                <span className={tabValue == 2 ? 'TabSelected' : 'TabNotSelected'}>Alignment</span>
                <span className={tabValue == 3 ? 'TabSelected' : 'TabNotSelected'}>Background</span>
            </div>
            <div className="TabContentRoot">
                {tabValue == 0 && <ActorTab setSelectedImage={setSelectedImage}/>}
                {tabValue == 2 && <AlignmentTab />}
                {tabValue == 3 && <BackgroundTab />}
                {/*tabValue == 2 && <BillingTab />} */}
            </div>
        </>
    )
}

export default ConfigurationTabComponent

