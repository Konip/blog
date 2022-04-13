import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Main from './pages/Main';
import WritePage from './pages/WritePage';

function App() {

  const [showPopUp, setShowPopUp] = React.useState<boolean>(false)
  const [showLogin, setShowLogin] = React.useState<boolean>(false)
  const [showReg, setShowReg] = React.useState<boolean>(false)

  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/write", element: <WritePage /> },
    { path: "*", element: <Main /> },
  ])

  const handleLogin = () => {
    setShowPopUp(!showPopUp)
    setShowLogin(!showLogin)
  }

  const handleReg = () => {
    setShowPopUp(!showPopUp)
    setShowReg(!showReg)
  }

  const closePopUp = () => {
    setShowPopUp(false)
    setShowReg(false)
    setShowLogin(false)
  }

  return (
    <div className="App">
      <Header handleLogin={handleLogin} handleReg={handleReg} />
      {showPopUp &&
        <Auth showLogin={showLogin} showReg={showReg}
          closePopUp={closePopUp}
        />
      }
      {routes}
    </div>
  );
}

export default App;
