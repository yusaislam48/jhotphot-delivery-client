import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import NotFound from '../../Shared/404/NotFound';
import SideBar from '../SideBar/SideBar';
import Table from './Table';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookedServices, setBookedServices] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://jhotphodelivery.herokuapp.com/bookedServices')
        .then(res => res.json())
        .then(data => setBookedServices(data))
    }, [bookedServices]);
    
    useEffect(()=>{
        fetch(`http://localhost:4000/isAdmin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser])
    

    return (
        <div>
            { isAdmin 
               ? <div className="container-fluid row " >
                    <SideBar></SideBar>
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5 className="text-brand mb-5">Dashboard</h5>
                        
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Pay With</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            {
                                bookedServices.map(service => <Table key={service._id} service={service}></Table>)
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

export default Dashboard;