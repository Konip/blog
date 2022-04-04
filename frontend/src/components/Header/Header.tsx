import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile'
import './Header.scss'

interface HeaderProps {
    setAuthVisible: () => void
}

const Header: React.FC<HeaderProps> = ({ setAuthVisible }) => {
    return (
        <div className='header'>
            <div className="header-left">
                <Search />
                <CreatePost />
            </div>
            <UserProfile setAuthVisible={setAuthVisible} />
        </div>
    )
}

export default Header