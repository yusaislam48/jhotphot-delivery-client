import React from 'react';
import TrackOrderForm from '../TrackOrderForm/TrackOrderForm';

const TrackOrder = () => {
    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center section-header'>Track Your <span className='h-text-color'>Order</span></h2>
            <TrackOrderForm></TrackOrderForm>
            
        </div>
    );
};

export default TrackOrder;