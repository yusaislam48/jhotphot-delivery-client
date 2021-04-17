import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import NotFound from '../../Shared/404/NotFound';
import SideBar from '../SideBar/SideBar';
import ManageServicesTable from './ManageServicesTable';

const ManageServices = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(()=>{
        fetch(`http://localhost:4000/isAdmin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser]);

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://jhotphodelivery.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])

    return (
        <div>
            {
                isAdmin ?
                <div className="container-fluid row " >
                    <SideBar></SideBar>
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5 className="text-brand mb-5">Manage Services</h5>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            {
                                services.map(service => <ManageServicesTable key={service._id} service={service}></ManageServicesTable>)
                            }
                        </table>
                    </div>
                </div> 
                : <div className='d-flex justify-content-center align-items-center'>
                    <div>
                    <NotFound></NotFound>
                    <h3 className='text-secondary'>You are not a admin...</h3>
                    </div>
                </div>

            }
        </div>
    );
};

export default ManageServices;