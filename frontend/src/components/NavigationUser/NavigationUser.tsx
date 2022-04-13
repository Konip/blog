import React from 'react'
import './NavigationUser.scss'

interface NavigationUserProps {
    handleLogin: () => void
    handleReg: () => void
}

const NavigationUser: React.FC<NavigationUserProps> = ({ handleLogin, handleReg }) => {

    return (
        <div className='navigation-profile'>
            <div className='navigation-login' onClick={handleLogin}>Login</div>
            <div className='navigation-register btn-black' onClick={handleReg}>Register</div>
        </div>
    )
}
export default NavigationUser