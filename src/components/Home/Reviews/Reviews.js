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
        <div style={{backgroundColor: 'tomato', paddingTop: '50px', paddingBottom: '50px'}}>
            <div class="container review">
                <h2 className='text-center section-header pb-3'>Customers <span style={{color:'white'}}>Review</span> </h2>
                <div class="row">
                    {
                        reviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;