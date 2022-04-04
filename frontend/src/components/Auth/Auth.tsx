import React from 'react'
import './Auth.scss'
import SignUp from './SignUp'

interface AuthPageProps {
    authVisible: boolean,
    setAuthVisible: () => void
}

const Auth: React.FC<AuthPageProps> = ({ authVisible ,setAuthVisible}) => {
    return (
        <div className={authVisible ? 'auth-active' : 'auth'}>
            <div className="auth-close" ></div>
            <div className="auth__content" >
                <SignUp setAuthVisible={setAuthVisible}/>
            </div>
        </div>
    )
}

export default Auth