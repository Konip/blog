import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import Search from '../Search/Search'
import UserProfile from '../UserProfile/UserProfile'
import './Header.scss'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-left">
                <Search />
                <CreatePost />
            </div>
            <UserProfile />
        </div>
    )
}
