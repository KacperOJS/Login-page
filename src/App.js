import React, { useState } from 'react';
import './App.css';
import { LoginContext } from './context/LoginContext';
import Login from './pages/Login';
import UserInfo from './pages/UserInfo';

function App() {
  const [haslo, setHaslo] = useState('');
  const [name, setName] = useState('');
  const [data, setData] = useState(false);
  const [info, setInfo] = useState([
    {
      name: 'Kacper',
      haslo: '12345',
      info: 'junior dev'
    },
    {
      name: 'Rycho',
      haslo: '123456',
      info: 'senior dev'
    }
  ]);

  return (
    <div className="App">
      <LoginContext.Provider value={{ setName, name, setHaslo, haslo, setData,info }}>
        {data ? <UserInfo /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
