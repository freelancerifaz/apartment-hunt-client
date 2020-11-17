import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LoginDetail from './components/Login/LoginDetail/LoginDetail';
import HomeDetailsRent from './components/Home/HomeDetailsRent/HomeDetailsRent';
import AddRentHouse from './components/Dashboard/AddRentHouse/AddRentHouse';
import BookingList from './components/Dashboard/BookingList/BookingList';
import MyRent from './components/Dashboard/MyRent/MyRent';
import Footer from './components/Shared/Footer/Footer';

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
          <Route path = '/homeDetails'>
            <HomeDetailsRent></HomeDetailsRent>
          </Route>
          <Route path = '/addRentHouse'>
            <AddRentHouse></AddRentHouse>
            <Footer></Footer>
          </Route>
          <Route path = '/bookingList'>
            <BookingList></BookingList>
            <Footer></Footer>
          </Route>
          <Route path = '/myRent'>
            <MyRent></MyRent>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;