import React from 'react';
import SideBar from '../SideBar/SideBar';
import Table from './Table';

const Dashboard = () => {
    return (
        <div className="container-fluid row " >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Dashboard</h5>
                <Table></Table>
            </div>
        </div>
    );
};

export default Dashboard;