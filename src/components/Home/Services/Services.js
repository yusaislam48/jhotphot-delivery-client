import React from 'react';
import './Service.css'
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center section-header'>OUR <span className='h-text-color'>SERVICES</span></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;