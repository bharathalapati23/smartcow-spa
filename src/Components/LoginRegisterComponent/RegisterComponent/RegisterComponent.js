import React from 'react'
import CustomInput from '../../../CustomComponents/CustomInput/CustomInput'
import './RegisterComponent.scss'
import CustomButton from '../../../CustomComponents/CustomButton/CustomButton'

const RegisterComponent = ({ setLogin }) => {
    return (
        <div className="RegisterComponent">
            Full Name
            <CustomInput variant='outlined' label="Enter your full name" />
            Email Address
            <CustomInput variant='outlined' label="Enter your email address" />
            <div className="PasswordDiv">
                <span>New Password</span>
                <span className="PasswordStrength">Strong</span>
            </div>
            <CustomInput variant='outlined' type="password" />
            <CustomButton>Signup</CustomButton>
            <div className="NewHereClass">
                <span>Already user?</span>
                <span className="LinkClass" onClick={() => setLogin(true)}>{' '}Login</span>
            </div>
        </div>
    )
}

export default RegisterComponent
