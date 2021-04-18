import React, { useEffect, useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://jhotphodelivery.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services]);

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
                    <div className="counter-box"> <i className="fa fa-group"></i> <span className="counter">325</span>
                        <p>Registered Members</p>
                    </div>
                </div>
                <div className="four col-md-3 mb-3">
                    <div className="counter-box"> <i className="fa fa-shopping-cart"></i> <span className="counter">{services.length}</span>
                        <p>Available Services</p>
                    </div>
                </div>
                <div className="four col-md-3 mb-3">
                    <div className="counter-box"> <i className="fa fa-user"></i> <span className="counter">150</span>
                        <p>Total Rider</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;