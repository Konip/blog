import React from 'react'
import Auth from '../components/Auth/Auth'

interface AuthPageProps {
  authVisible: boolean,
  setAuthVisible: () => void
}

const AuthPage: React.FC<AuthPageProps> = ({ authVisible, setAuthVisible }) => {
  return (
    <>
      <Auth authVisible={authVisible} setAuthVisible={setAuthVisible}/>
    </>
  )
}

export default AuthPage