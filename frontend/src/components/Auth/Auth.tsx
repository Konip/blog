import React from 'react'
import './Auth.scss'
import Login from './Login'
import SignUp from './SignUp'

interface AuthPageProps {
    showLogin: boolean
    showReg: boolean
    closePopUp: () => void
}

const Auth: React.FC<AuthPageProps> = ({ showLogin, showReg, closePopUp }) => {
    return (
        <div className={showLogin || showReg ? 'auth-active' : 'auth'}>
            <div className="auth__content" >
                {showReg && <SignUp closePopUp={closePopUp}/>}
                {showLogin && <Login closePopUp={closePopUp}/>}
            </div>
        </div>
    )
}

export default Auth