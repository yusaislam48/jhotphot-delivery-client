import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import ManageServicesTable from './ManageServicesTable';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://jhotphodelivery.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])

    return (
        <div className="container-fluid row " >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Manage Services</h5>
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
    );
};

export default ManageServices;