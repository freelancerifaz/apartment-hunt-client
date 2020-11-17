import React from 'react';
import {Button, Form, FormControl} from 'react-bootstrap';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className = "mt-5">
            <h1 style = {{color: "#ffffff"}} className="text-center mb-4">FIND YOUR HOUSE RENT</h1>
            <Form inline className="justify-content-center">
                <FormControl type="text" placeholder="Search" className="mr-sm-2 search-style" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </main>
    );
};

export default HeaderMain;