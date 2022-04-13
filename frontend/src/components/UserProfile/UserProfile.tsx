import React from 'react'
import './UserProfile.scss'

interface UserProfileProps {
    setAuthVisible: () => void
}

const UserProfile: React.FC<UserProfileProps> = ({ setAuthVisible }) => {
    return (
        <div className='user-profile'>
            <div className='user-login' onClick={setAuthVisible}>Login</div>
            <div className='user-register btn-black'>Register</div>
        </div>
    )
}
export default UserProfile