import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Login from '../Login/Login';

const LoginDetail = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginDetail;