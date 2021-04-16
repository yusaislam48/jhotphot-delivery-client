import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Admin/SideBar/SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faGripHorizontal, faPlusSquare, faUserLock, faHome, faShoppingCart, faComment, faList } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const SideBarClient = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/client/bookService" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Book Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/client/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faList} /> <span>Booking List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/client/review" className="text-white">
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span> 
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBarClient;