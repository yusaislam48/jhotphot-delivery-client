import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import NotFound from '../../Shared/404/NotFound';
import AdminTable from '../AdminTable/AdminTable';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';
import SideBar from '../SideBar/SideBar';

const MakeAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [admins, setAdmins] = useState([]);
    useEffect(()=>{
        fetch('https://jhotphodelivery.herokuapp.com/admins')
        .then(res => res.json())
        .then(data => setAdmins(data))
    }, [admins]);
        
    useEffect(()=>{
        fetch(`https://jhotphodelivery.herokuapp.com/isAdmin/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [loggedInUser]);

    return (
        <div>
            {
                isAdmin ?
                <div className="container-fluid row " >
                    <SideBar></SideBar>
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5 className="text-brand mb-5">Make Admin</h5>
                        <MakeAdminForm></MakeAdminForm>
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                                {
                                    admins.map(admin => <AdminTable key={admin._id} admin={admin}></AdminTable>)
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

export default MakeAdmin;