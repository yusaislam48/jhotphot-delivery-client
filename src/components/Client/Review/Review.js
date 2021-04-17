import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import SideBarClient from '../SideBarClient/SideBarClient';

const Review = () => {
    return (
        <div className="container-fluid row " >
            <SideBarClient></SideBarClient>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand mb-5">Review</h5>
                <ReviewForm></ReviewForm>
            </div>
        </div>
    );
};

export default Review;