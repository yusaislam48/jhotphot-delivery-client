import React from 'react';
import './ReviewsCard.css'
import img1 from '../../../images/Ellipse 3.png'

const ReviewsCard = () => {
    return (
        <div class="col-md-4 colum-d">
            <div class="card card-review d-flex mx-auto">
                <div class="card-image"> 
                    <img class="img-fluid d-flex mx-auto review-img" src={img1} /> 
                </div>
                <div class="card-text review-card-text">
                    <div class="card-title review-card-title">
                        Lorem Ipsum!
                    </div> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptatum!
                </div>
                <div class="footer"> 
                <span id="name">Micheal Smith<br/></span> <span id="position">CEO of <a href="#">Google.com</a></span> 
                </div>
            </div>
        </div>

    );
};

export default ReviewsCard;