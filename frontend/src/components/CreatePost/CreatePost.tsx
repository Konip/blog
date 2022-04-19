import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { openPopUp } from '../../store/modalActionTypes'
import './CreatePost.scss'

interface CreatePostProps {
  auth: boolean
}

const CreatePost: React.FC<CreatePostProps> = ({ auth }) => {

  const dispatch = useDispatch()

  return (
    <>
      {auth
        ?
        <Link className='create btn-black' to={'write'}>
          Новая запись
        </Link>
        :
        <Link className='create btn-black' 
        onClick={() => dispatch(openPopUp('signUp'))}
        to={''}
        >
          Новая запись
        </Link>
      }
    </>

  )
}
export default CreatePost 