import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Table from './Table';

const Dashboard = () => {
    const [bookedServices, setBookedServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/bookedServices')
        .then(res => res.json())
        .then(data => setBookedServices(data))
    }, [bookedServices]);
    
    return (
        <div className="container-fluid row " >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Dashboard</h5>
                
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        bookedServices.map(service => <Table key={service._id} service={service}></Table>)
                    }
                </table>

            </div>
        </div>
    );
};

export default Dashboard;