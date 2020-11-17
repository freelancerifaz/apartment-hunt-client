import React, { useEffect, useState } from 'react';
import washington from '../../../images/Rectangle 394.png';
import Family from '../../../images/Rectangle 396.png';
import Gorgeous from '../../../images/Rectangle 398.png';
import Luxury from '../../../images/Rectangle 405.png';
import Epic from '../../../images/Rectangle 403.png';
import Avenue from '../../../images/Rectangle 405.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { url } from "../../../dbURL/dburl";
const serviceData = [
    {
        id: 1,
        img: washington,
        title: 'Washington Avenue',
        price: "$194"
    },
    {
        id: 2,
        img: Family,
        title: 'Family Apartment Three',
        price: "$356"
    },
    {
        id: 3,
        img: Gorgeous,
        title: 'Gorgeous House',
        price: "$256"
    },
    {
        id: 4,
        img: Luxury,
        title: 'Luxury Villa',
        price: "$345"
    },
    {
        id: 5,
        img: Epic,
        title: 'Epic Huda Palacio',
        price: "$536"
    },
    {
        id: 6,
        img: Avenue,
        title: 'Washington Avenue',
        price: "$283"
    },
]

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`${url}/appartments`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: "#275A53" }}>House Rent</h5>
                <h1 style={{ fontWeight: 700, color: "#16322E" }}>Discover the latest Rent <br /> available today</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Services;