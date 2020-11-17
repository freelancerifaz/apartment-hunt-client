import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const noNamed = [
        {name: "H#340 (4th Floor), Road #24,"},
        {name: "New DOHS Mohakhali, Dhaka, Bangladesh"},
        {name: "Phone: +8801882784048"},
        {name: "Email: mrifaz369@gmail.com"},
    ]
    const aboutUs = [
        {name: "We are the top real estate agency in Sydney. With urgent available to answer any questions 24/7"}
       
    ]
    const company = [
        {name: "About"},
        {name: "Site Map"},
        {name: "Support Center"},
        {name: "Submit Listing"},
        {name: "Terms And Conditions"},
    ]
    const quickLinks = [
        {name: "Quick Links"},
        {name: "Rentals"},
        {name: "Sales"},
        {name: "Contact"},
        {name: "Our Blog"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div style = {{color: "#ffffff"}} className="container pt-5">
                <div style = {{color: "#ffffff"}} className="row py-5">
                    <FooterCol key={1} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={quickLinks}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={company}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={aboutUs}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+8801882784048</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;