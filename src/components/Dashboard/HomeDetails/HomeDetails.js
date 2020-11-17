import React from 'react';
import './HomeDetails.css';
import subImg1 from '../../images/Rectangle 394.png';
import subImg2 from '../../images/Rectangle 396.png';
import subImg3 from '../../images/Rectangle 404.png';
import subImg4 from '../../images/Rectangle 405.png';
import subImg5 from '../../images/Rectangle 407.png';
import subImg6 from '../../images/Rectangle 408.png';
import subImg7 from '../../images/Rectangle 409.png';
import subImg8 from '../../images/Rectangle 410.png';

const HomeDetails = () => {
  return (
    <div>
      <div className="apartmentImage">
        <div className="apartmentImageBlackLayer">
          <h2 className="text-center">Apartment</h2>
        </div> 
      </div>
      <div className="container">
        <div className="row mt-5">
        {/* carousel */}
          <div className="col-md-8">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100 carouselImg" src={subImg1} alt="First slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 carouselImg" src={subImg2} alt="Second slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 carouselImg" src={subImg3} alt="Third slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 carouselImg" src={subImg4} alt="Third slide"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            {/* sub-pic-section */}
            <div className="row mt-3">
              <div className="col-md-3">
                <img className="img subImg5" src={subImg5} alt=""/>
              </div>
              <div className="col-md-3">
                <img className="img subImg6" src={subImg6} alt=""/>
              </div>
              <div className="col-md-3">
                <img className="img subImg7" src={subImg7} alt=""/>
              </div>
              <div className="col-md-3">
                <img className="img subImg8" src={subImg8} alt=""/>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="col-md-4 formStyle">
            <form className="py-5">
              <div class="form-group mb-4">
                <input type="text" class="form-control" id="exampleInputText1" placeholder="Full Name" />
              </div>
              <div class="form-group mb-4">
                <input type="number" class="form-control" id="exampleInputNumber1" placeholder="Phone No." />
              </div>
              <div class="form-group mb-4">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" />
              </div>
              <div class="form-group mb-4">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-success btn-block mb-2">Requesr Booking</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <div>
              <h2 className="font-weight-bold">Family Apartment Three <span className="text-right text-success font-weight-bold">$256</span></h2>
              <p class="text-secondary">3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
            </div>
            <div>
              <h3 className="font-weight-bold">Price Details-</h3>
              <div class="text-secondary">
                <p>Rent/Month: $550 (negotiable)</p>
                <p>Service Charge : 8,000/= Tk per month, subject to change</p>
                <p>Security Deposit : 3 month’s rent</p>
                <p>Flat Release Policy : 3 months earlier notice required</p>
              </div>
            </div>
            <div>
              <h3 className="font-weight-bold">Property Details-</h3>
              <div class="text-secondary">
                <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                <p>Flat Size : 3000 Sq Feet.</p>
                <p>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                <p>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</p>
                <p>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                <p>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;