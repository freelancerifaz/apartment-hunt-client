import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h6 style = {{fontSize: '20px' , fontWeight: 800}}>{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} style = {{color: '#ffffff'}}>{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;