import React from 'react';
import './App.css';

interface ILoginLogout{
    onLogout : any
}

function User({onLogout}:ILoginLogout) {

    const logout = () =>{
        onLogout()
    }
  return (
    <div className="App">
        <h1>Welcome to login</h1>
        <button onClick={logout} className="btn btn-info">Logout</button>
    </div>
  );
}

export default User;
