import React from 'react';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    return (
        <div className="container-fluid row " >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand mb-5">Make Admin</h5>
                <MakeAdminForm></MakeAdminForm>
            </div>
        </div>
    );
};

export default MakeAdmin;