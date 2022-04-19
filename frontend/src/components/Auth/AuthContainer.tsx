import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store/store'
import Auth from './Auth'
import './Auth.scss'


const AuthContainer = () => {

    const { modal, typeModal } = useSelector((state: AppState) => state.modal)

    return (
        <Auth modal={modal} typeModal={typeModal} />
    )
}

export default AuthContainer