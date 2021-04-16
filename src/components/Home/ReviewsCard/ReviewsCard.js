import React from 'react';
import './ReviewsCard.css'
import img1 from '../../../images/Ellipse 3.png'

const ReviewsCard = ({review}) => {
    // console.log(review)
    const {name, image, company, designation, description} = review;
    return (
        <div class="col-md-4 colum-d">
            <div class="card card-review d-flex mx-auto">
                <div class="card-image"> 
                    <img class="img-fluid d-flex mx-auto review-img" src={image} /> 
                </div>
                <div class="card-text review-card-text">
                    {/* <div class="card-title review-card-title">
                        {name}
                    </div>  */}
                    {description}
                </div>
                <div class="footer"> 
                <span id="name">{name}<br/></span> <span id="position">{designation} of <a href="#">{company}</a></span> 
                </div>
            </div>
        </div>

    );
};

export default ReviewsCard;