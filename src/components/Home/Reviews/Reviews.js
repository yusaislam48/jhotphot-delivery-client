import React, { useEffect, useState } from 'react';
import ReviewsCard from '../ReviewsCard/ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://jhotphodelivery.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [reviews])
    return (
        <div className='mt-5 mb-5'>
            <div class="container">
                <h2 className='text-center section-header pb-3'>Customers <span style={{color:'tomato'}}>Review</span> </h2>

                <div class="section-primary t-bordered">
                    <div class="container">
                        <div class="row testimonial-three testimonial-three--col-three">
                            {
                                reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;