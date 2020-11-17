import React from 'react';

const ClientServiceDetail = ({services}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{width: '90px' , height: '90px'}} className = 'img-fluid' src={services.img} alt="" />
            <h3 style = {{color: "#16322E" , fontWeight: 800}} className="mt-3 mb-3 p-2">{services.title}</h3>
            <p className="text-secondary">{services.description}</p>
        </div>
    );
};

export default ClientServiceDetail;