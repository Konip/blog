import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import Auth from './components/Auth/Auth';
import AuthContainer from './components/Auth/AuthContainer';
import Header from './components/Header/Header';
import Main from './pages/Main';
import WritePageContainer from './pages/WritePageContainer';

function App() {

  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/write", element: <WritePageContainer /> },
    { path: "/profile", element: <WritePageContainer /> },
    { path: "*", element: <Main /> },
  ])

  return (
    <div className="App">
      <Header/>
      <AuthContainer />
      {routes}
    </div>
  );
}

export default App;
