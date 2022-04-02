import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile'
import './Header.scss'

const Header = ({ setModal }: any) => {
    return (
        <div className='header'>
            <div className="header-left">
                <Search />
                <CreatePost />
            </div>
            <UserProfile setModal={setModal} />
        </div>
    )
}

export default Header