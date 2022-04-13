import React from 'react'
import CreatePost from '../CreatePost/CreatePost'
import NavigationUser from '../NavigationUser/NavigationUser'
import Search from '../Search/Search'
import './Header.scss'

interface HeaderProps {
    handleLogin: () => void
    handleReg: () => void
}

const Header: React.FC<HeaderProps> = ({ handleLogin,handleReg }) => {
    return (
        <div className='header'>
            <div className="header-left">
                <Search />
                <CreatePost />
            </div>
            <NavigationUser handleLogin={handleLogin} handleReg={handleReg} />
        </div>
    )
}

export default Header