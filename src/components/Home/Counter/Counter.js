import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="four col-md-3 mb-3">
                    <div class="counter-box colored"> <i class="fa fa-thumbs-o-up"></i> <span class="counter">2147</span>
                        <p>Happy Customers</p>
                    </div>
                </div>
                <div class="four col-md-3 mb-3">
                    <div class="counter-box"> <i class="fa fa-group"></i> <span class="counter">3275</span>
                        <p>Registered Members</p>
                    </div>
                </div>
                <div class="four col-md-3 mb-3">
                    <div class="counter-box"> <i class="fa fa-shopping-cart"></i> <span class="counter">289</span>
                        <p>Available Products</p>
                    </div>
                </div>
                <div class="four col-md-3 mb-3">
                    <div class="counter-box"> <i class="fa fa-user"></i> <span class="counter">1563</span>
                        <p>Saved Trees</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;