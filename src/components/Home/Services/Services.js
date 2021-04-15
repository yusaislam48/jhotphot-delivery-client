import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])
    // console.log(services)
    return (
        <div className='container mt-5'>
            <h2 className='text-center section-header'>OUR <span className='h-text-color'>SERVICES</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;