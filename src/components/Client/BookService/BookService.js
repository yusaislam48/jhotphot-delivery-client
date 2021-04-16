import React from 'react';
import { useParams } from 'react-router';
import BookServiceForm from '../BookServiceForm/BookServiceForm';
import SideBarClient from '../SideBarClient/SideBarClient';

const BookService = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    return (
        <div className="container-fluid row " >
            <SideBarClient></SideBarClient>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Book Service</h5>
                <BookServiceForm id={serviceId}></BookServiceForm><br/>
            </div>
        </div>
    );
};

export default BookService;