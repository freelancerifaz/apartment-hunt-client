import React from 'react';
import './MyRent.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png';
import add from '../../../images/logos/plus 1.png';
import rent from '../../../images/logos/Group 33351.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const MyRent = () => {
  return (
    <div className="container">   
    <div className="addRentHouse mt-5">

      {/* sideBarDetails */}
      <div className="sideBarDetails">
        <a href="/"><img className="logo mb-5" src={logo} alt=""/></a>
        <div className="sideMenu">
          <Link to="/bookingList">
            <FontAwesomeIcon className="sideLogo fontAws" icon={faBook} />
            <p>Booking List</p>
          </Link>
        </div>
        <div className="sideMenu">
          <Link to = '/addRentHouse'>
            <img className="sideLogo" src={add} alt=""/>
            <p>Add House</p>
          </Link>
        </div>
        <div className="sideMenu">
          <Link to = '/myRent'>
            <img className="sideLogo" src={rent} alt=""/>
            <p>My Rent</p>
          </Link>
        </div>
      </div>
 
      {/* bookingListDetails */}
      <div className="bookingListDetails">
        <div className="bookingTitle mb-4">
          <h4 className="mb-4 d-inline">Booking List</h4>
          <h4 className="d-inline float-right">User Name</h4>
        </div>
        <div className="bookingList">
          <div className="row">
            <div className="col-md-4">
              <p>House Name</p>
              <p>Luxury Villa</p>
            </div>
            <div className="col-md-4">
              <p>Price</p>
              <p>$195</p>
            </div>
            <div className="col-md-4">
              <p>Action</p>
              <button className="btn btnBgColor">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyRent;