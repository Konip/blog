import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../store/store'
import { userState } from '../store/userReducer'
import WritePage from './WritePage'

const WritePageContainer = () => {

  const { auth } = useSelector((state: AppState) => state.user)

  return (
    <WritePage auth={auth} />
  )
}

export default WritePageContainer