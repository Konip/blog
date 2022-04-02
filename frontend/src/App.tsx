import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Main from './pages/Main';
import WritePage from './pages/WritePage';

function App() {

  const [modal, setModal] = React.useState(false)

  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/write", element: <WritePage /> },
    { path: "*", element: <Main /> },
  ])

  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <div className="App">
      {console.log(modal)
      }
      <Header setModal={handleModal} />
      {routes}
    </div>
  );
}

export default App;
