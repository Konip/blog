import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import CreatePost from '../CreatePost/CreatePost'
import NavigationUser from '../NavigationUser/NavigationUser'
import Search from '../Search/Search'
import './Header.scss'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const { auth, fullName } = useSelector((state: AppState) => state.user)
    return (
        <div className='header'>
            <div className="header-left">
                <Search />
                <CreatePost auth={auth} />
            </div>
            <NavigationUser auth={auth} fullName={fullName}/>
        </div>
    )
}

export default Header