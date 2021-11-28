import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '../../../../Logo/edit.svg'
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput'
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton'


const ProfileTab = () => {
    return (
        <div className="ProfileTabRoot">
            <div className='AvatarContainer'>
                <Avatar style={{ width: '100px', height: '100px', marginRight: '20px' }} alt="Remy Sharp" src="https://hoopshype.com/wp-content/uploads/sites/92/2021/10/i_ad_30_e8_lebron-james.png?w=1000&h=600&crop=1" />
                <img src={EditIcon} className="EditIcon" />
            </div>
            <div className="NameContainer">
                <div className="TextInputStyle">
                    First Name
                <CustomInput
                        variant='outlined'
                        InputLabelProps={{ shrink: false }}
                    />
                </div>
                <div className="TextInputStyle">
                    Last Name
                <CustomInput
                        variant='outlined'
                        InputLabelProps={{ shrink: false }}
                    />
                </div>
            </div>
            <div className="TextInputStyle">
                Email
                <CustomInput
                    variant='outlined'
                    InputLabelProps={{ shrink: false }}
                />
            </div>
            <CustomButton style={{ width: '143px' }}>Save Changes</CustomButton>
        </div>
    )
}

export default ProfileTab
