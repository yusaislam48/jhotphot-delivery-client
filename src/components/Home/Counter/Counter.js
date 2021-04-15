import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className='text-center section-header pb-4'>AT A <span className='h-text-color'>GLANCE</span></h2>

            <div className="row">
                <div className="four col-md-3 mb-3">
                    <div className="counter-box colored"> <i className="fa fa-thumbs-o-up"></i> <span className="counter">2147</span>
                        <p>Happy Customers</p>
                    </div>
                </div>
                <div className="four col-md-3 mb-3">
                    <div className="counter-box"> <i className="fa fa-group"></i> <span className="counter">3275</span>
                        <p>Registered Members</p>
                    </div>
                </div>
                <div className="four col-md-3 mb-3">
                    <div className="counter-box"> <i className="fa fa-shopping-cart"></i> <span className="counter">289</span>
                        <p>Available Products</p>
                    </div>
                </div>
                <div className="four col-md-3 mb-3">
                    <div className="counter-box"> <i className="fa fa-user"></i> <span className="counter">1563</span>
                        <p>Saved Trees</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;