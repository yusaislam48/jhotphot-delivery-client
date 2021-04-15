import React from 'react';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import SideBar from '../SideBar/SideBar';

const AddService = () => {
    return (
        <div className="container-fluid row " >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add Service</h5>
                <AddServiceForm></AddServiceForm>

            </div>
        </div>
    );
};

export default AddService;