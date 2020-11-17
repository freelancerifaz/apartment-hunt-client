import React from 'react';
import './AddRentHouse.css';
import logo from '../../logos/Logo.png';
import add from '../../logos/plus 1.png';
import rent from '../../logos/Group 33351.png';
import button from '../../logos/cloud-upload-outline 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const AddRentHouse = () => {
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