import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import LoginDetail from './components/Login/LoginDetail/LoginDetail';

export const UserContext = createContext();

function App() {
  
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/login'>
            <LoginDetail></LoginDetail>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;