import React from 'react'
import './Auth.scss'
import Login from './Login'
import SignUp from './SignUp'

interface AuthPageProps {
    modal: boolean
    typeModal: string
}

const Auth: React.FC<AuthPageProps> = ({ modal, typeModal }) => {
    return (
        <div className={modal ? 'auth-active' : 'auth'}>
            <div className="auth__content" >
                {modal && typeModal === 'signUp'
                    ? <SignUp />: 
                    modal && typeModal === 'login'
                        ? <Login />
                        : <></>
                }
            </div>
        </div>
    )
}

export default Auth