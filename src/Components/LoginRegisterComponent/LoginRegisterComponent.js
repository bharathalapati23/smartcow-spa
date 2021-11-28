import React, { useState } from 'react'
import './LoginRegisterComponent.scss'
import LoginComponent from './LoginComponent/LoginComponent'
import RegisterComponent from './RegisterComponent/RegisterComponent'

const LoginRegisterComponent = () => {
    const [isLogin, setLogin] = React.useState(true)

    return (
        <div className="LoginRegisterRootContainer">
            {isLogin ? 'Sign In' : 'Create an account'}
            <div className="LoginRegisterContainer">
                {isLogin ? <LoginComponent setLogin={setLogin} /> : <RegisterComponent setLogin={setLogin} />}
            </div>
        </div>
    )
}

export default LoginRegisterComponent
