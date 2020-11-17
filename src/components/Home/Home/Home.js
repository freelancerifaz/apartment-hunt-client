import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ClientService from '../ClientService/ClientService';
import ClientServiceDetail from '../ClientServiceDetail/ClientServiceDetail';
import Header from '../Header/Header';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ClientService></ClientService>
            <Footer></Footer>
        </div>
    );
};

export default Home;