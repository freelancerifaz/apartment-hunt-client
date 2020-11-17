import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faRestroom, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import './ServiceDetail.css';
import { url } from '../../../dbURL/dburl';

const ServiceDetail = ({ service }) => {
    console.log(service)
    return (
        <div className="col-md-4 col-sm-12">
            <div className="my-4">
                <div className="card shadow">
                    <img className="card-img-top img-fluid" src={`https://dummyimage.com/300x200/000/fff`} alt={service.title} />
                    <div className="card-body">
                        <h3 style={{ color: "#16322E", fontWeight: 800 }} className="card-title">{service.title}</h3>
                        <div className="d-flex ">
                            <FontAwesomeIcon className="mr-2" icon={faThumbtack} />
                            <p className="card-text">{service.location}</p>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="calendar">
                                <FontAwesomeIcon className="mr-2" icon={faBed} />
                                <span>{service.numberOfBedRooms}</span>
                            </div>
                            <div className="people">
                                <FontAwesomeIcon className="mr-2" icon={faRestroom} />
                                <span>{service.numberOfBathRooms}</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="calendar">
                                <h2 style={{ color: "#275A53", fontWeight: 800 }} classNameName="my-2">{`$${service.price}`}</h2>
                            </div>
                            <div className="people">
                                <button type="button" className="getstarted-btn-2">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;