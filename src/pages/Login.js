import React, { createContext, useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import UserInfo from './UserInfo';

const Login = () => {
  const { setName, setHaslo,setData, name, haslo,info } = useContext(LoginContext); // Use useContext hook here
  const handleFunction = (e) => {
    e.preventDefault();
    // Check if name and haslo are correct
    const user = info.find((userInfo) => userInfo.name === name && userInfo.haslo === haslo);
    if (user) {
      setData(true);
    }else{
		setData(false);
		console.log('Bledny login lub haslo');
	}
  };

  return (
    <>
      <form onSubmit={handleFunction}>
        Name:<br/>
        <input 
          type="text"
          onChange={(e) => {
            setName(e.target.value); // Use setName directly
          }}
        />
        <br/>
        Haslo:<br/>
        <input 
          type="password"
          onChange={(e) => {
            setHaslo(e.target.value); // Use setHaslo directly
          }}
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
