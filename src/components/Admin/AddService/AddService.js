import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import NotFound from '../../Shared/404/NotFound';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(()=>{
        fetch(`https://jhotphodelivery.herokuapp.com/isAdmin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser]);
    
    return (
        <div>
            {
                isAdmin 
                ?<div className="container-fluid row " >
                    <SideBar></SideBar>
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5 className="text-brand mb-5">Add Service</h5>
                        <AddServiceForm></AddServiceForm>
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

export default AddService;