import React from 'react';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const Reviews = () => {
    return (
        <div style={{backgroundColor: 'tomato', paddingTop: '50px', paddingBottom: '50px'}}>
            <div class="container review">
                <h2 className='text-center section-header pb-3'>Customers <span style={{color:'white'}}>Review</span> </h2>
                <div class="row">
                    <ReviewsCard></ReviewsCard>
                    <ReviewsCard></ReviewsCard>
                    <ReviewsCard></ReviewsCard>
                </div>
            </div>
        </div>
    );
};

export default Reviews;