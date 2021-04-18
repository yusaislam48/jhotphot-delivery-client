import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Home" , link: "/"},
        {name: "Services" , link: "#"},
        {name: "Fees" , link: "#"}
    ]
    const ourAddress = [
        {name: "Rahman Nagar, Bogura" , link: "//google.com/map"}
       
    ]
    const ourServices = [
        {name: "Home Delivery" , link: "#"},
        {name: "Pickup From Home" , link: "#"},
        {name: "Food Delivey" , link: "#"}
    ]
    const Client = [
        {name: "Book A Service" , link: "#"},
        {name: "Booking List" , link: "#"},
        {name: "Place a review" , link: "#"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Client" menuItems={Client}/>
                    <FooterCol key={3} menuTitle="Services" menuItems={ourServices}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
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