import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {isSignedIn, name, email, image} = loggedInUser;
    return (
        <nav  className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">JhotPhot Delivery</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='#'>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='#'>Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/admin/dashboard'>Admin</Link>
                        </li>
                        
                        {
                            isSignedIn 
                            ?  <li className="nav-item">
                                    <Link className="nav-link" to='/client/bookingList'><h5 style={{color: "tomato"}}>{name}</h5></Link>
                                </li>
                            :   <li className="nav-item">
                                    <Link to="/login">
                                        <button type="button" className="btn btn-dark">Login</button>
                                    </Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;