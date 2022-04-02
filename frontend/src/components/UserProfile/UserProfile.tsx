import React from 'react'
import './UserProfile.scss'

const UserProfile = ({ setModal }: any) => {
    return (
        <div className='user-profile'>
            <div className="user-login" onClick={setModal}>Login</div>
            <div className="user-register btn-black">Register</div>
        </div>
    )
}
export default UserProfile