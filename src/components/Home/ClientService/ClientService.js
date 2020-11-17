import React from 'react';
import Apartment from '../../../images/logos/apartment 1.png';
import Affordable from '../../../images/logos/affordable 1.png';
import Lessee from '../../../images/logos/lessee 1.png';
import ClientServiceDetail from '../ClientServiceDetail/ClientServiceDetail';

const clientServiceData = [
    {
        id: 1,
        img: Apartment,
        title: 'Wide Range of Properties',
        description: 'with a robust selection of popular properties on hand as well as leading properties from experts'
    },
    {
        id: 2,
        img: Affordable,
        title: 'Financing Made Easy',
        description: 'Our stress-free finance department that can find financial solutions to save you money'
    },
    {
        id: 3,
        img: Lessee,
        title: 'Trusted By Thousands',
        description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users'
    },
]

const ClientService = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style = {{color: "#275A53"}}>Service</h5>
                <h1 style = {{fontWeight: 700 , color: "#16322E"}}>We are an agency tailored to all <br/> clients needs that always delivered</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        clientServiceData.map(services => <ClientServiceDetail services={services} key={services.id}></ClientServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientService;