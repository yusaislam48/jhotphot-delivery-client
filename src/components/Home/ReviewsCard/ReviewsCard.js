import React from 'react';
import './ReviewsCard.css'

const ReviewsCard = ({ review }) => {
    // console.log(review)
    const { name, image, company, designation, description } = review;
    return (
        <div className="col-md-4 testimonial-three-col">
            <div className="testimonial-inner">
                <div className="testimonial-image" itemProp="image">
                    <img width="180" height="180" src={image} />
                </div>
                <div className="testimonial-content">
                    <p>{description}</p>
                </div>
                <div className="testimonial-meta">
                    <strong className="testimonial-name" itemProp="name">{name}</strong>
                    <span className="testimonial-job-title" itemProp="jobTitle">{designation}</span> – <a className="testimonial-link" href="#" >{company}</a>
                </div>
            </div>
        </div>

    );
};

export default ReviewsCard;