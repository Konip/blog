import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage';
import Main from './pages/Main';
import WritePage from './pages/WritePage';

function App() {

  const [authVisible, setAuthVisible] = React.useState(false)

  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/write", element: <WritePage /> },
    { path: "*", element: <Main /> },
  ])

  const handleModal = () => {
    setAuthVisible(!authVisible)
  }

  return (
    <div className="App">
      <Header setAuthVisible={handleModal} />
      {authVisible &&
        <AuthPage authVisible={authVisible} setAuthVisible={handleModal}/>
      }
      {routes}
    </div>
  );
}

export default App;
