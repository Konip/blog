import React from 'react'
import { Link } from 'react-router-dom'
import './CreatePost.scss'

const CreatePost = () => {
  return (
    <Link className='create btn-black' to={'write'}>
      Новая запись
    </Link>
  )
}
export default CreatePost 