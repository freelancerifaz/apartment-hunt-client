import React from 'react';
import './BookingList.css';
import logo from '../../logos/Logo.png';
import add from '../../logos/plus 1.png';
import rent from '../../logos/Group 33351.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const BookingList = () => {
  return (
    <div className="container">   
    <div className="addRentHouse mt-5">

      {/* sideBarDetails */}
      <div className="sideBarDetails">
        <img className="logo mb-5" src={logo} alt=""/>
        <div className="sideMenu">
          <FontAwesomeIcon className="sideLogo fontAws" icon={faBook} />
          <p>Booking List</p>
        </div>
        <div className="sideMenu">
          <img className="sideLogo" src={add} alt=""/>
          <p>Add House</p>
        </div>
        <div className="sideMenu">
          <img className="sideLogo" src={rent} alt=""/>
          <p>My Rent</p>
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
            <div className="col-md-2">
              <p>Name</p>
              <p>Habib Rahman</p>
            </div>
            <div className="col-md-2">
              <p>Email ID</p>
              <p>habib1@gmail.com</p>
            </div>
            <div className="col-md-2">
              <p>Phone No</p>
              <p>+8801754586901</p>
            </div>
            <div className="col-md-2">
              <p>Message</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-2">
              <p>Status</p>
              <p>Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingList;