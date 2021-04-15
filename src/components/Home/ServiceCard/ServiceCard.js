import React from 'react';
import './ServiceCard.css'
import img from '../../../images/cover-bg.jpg'
import { useHistory } from 'react-router';

const ServiceCard = ({service}) => {
    const history = useHistory();
    return (
        <div onClick={()=>history.push(`/client/bookService/${service._id}`)} className="col mb-4">
            <div className="card h-100">
                <img src={service?.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service?.name}</h5>
                    <p className="card-text">{service?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;