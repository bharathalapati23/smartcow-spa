import React from 'react'
import CustomInput from '../../../CustomComponents/CustomInput/CustomInput'
import './LoginComponent.scss'
import CustomButton from '../../../CustomComponents/CustomButton/CustomButton'
import { useDispatch } from 'react-redux'
import { logInUser } from '../../../reduxfiles/actions/login'
import { useHistory } from 'react-router-dom'

const LoginComponent = ({ setLogin }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleLogin = () => {
        if (emailAddress == 'admin' && password == 'password') {
            dispatch(logInUser())
            history.push('/video-edit')
        }
    }

    return (
        <div className="LoginComponent">
            Email Address
            <CustomInput
                variant='outlined'
                label={emailAddress.length ? '' : "Enter your email address"}
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                InputLabelProps={{ shrink: false }}
            />
            <div className="PasswordDiv">
                <span>Password</span>
                <span className="LinkClass">Forgot?</span>
            </div>
            <CustomInput
                variant='outlined'
                label={password.length ? '' : "Enter your password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ shrink: false }}
                type={'password'}
            />
            <CustomButton onClick={handleLogin}>Login</CustomButton>
            <div className="NewHereClass">
                <span>New here?</span>
                <span className="LinkClass" onClick={() => setLogin(false)}>{' '}Signup</span>
            </div>
        </div>
    )
}

export default LoginComponent
