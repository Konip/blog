import React from 'react'
import Write from '../components/Write/Write'

interface WritePageProps {
  auth: boolean
}

const WritePage: React.FC<WritePageProps> = ({ auth }) => {
  return (
    <Write />
  )
}

export default WritePage