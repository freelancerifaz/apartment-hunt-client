import React from 'react';
import './AddRentHouse.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png';
import add from '../../../images/logos/plus 1.png';
import rent from '../../../images/logos/Group 33351.png';
import button from '../../../images/logos/cloud-upload-outline 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const AddRentHouse = () => {
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
          <h4 className="mb-4 d-inline">Add Rent House</h4>
          <h4 className="d-inline float-right">User Name</h4>
        </div>
        <div className="bookingList">
        <div className="row">
          <div className="col-md-6">
            <p>Service Title</p>
            <input type="text" class="form-control" placeholder="Enter title"></input>
          </div>
          <div className="col-md-6">
            <p>Price</p>
            <input type="text" class="form-control" placeholder="Price"></input>
          </div>
        </div>  

        <div className="row mt-3">
          <div className="col-md-6">
            <p>Location</p>
            <input type="text" class="form-control" placeholder="Enter title"></input>
          </div>
          <div className="col-md-6">
            <p>No of Bedroom</p>
            <input type="text" class="form-control" placeholder="Price"></input>
          </div>
        </div> 

        <div className="row mt-3">
          <div className="col-md-6">
            <p>No of Bethroom</p>
            <input type="text" class="form-control" placeholder="Enter title"></input>
          </div>
          <div className="col-md-6">
            <p>Thumbnail</p>
            <button className="btn uploadBtn">
              <img className="uploadImg" src={button} alt=""/>
              Upload image
            </button>
          </div>
        </div> 

        </div>
        <button className="btn btnBgColor float-right mt-3">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default AddRentHouse;