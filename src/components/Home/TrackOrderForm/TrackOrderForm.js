import React, { useState } from 'react';

const TrackOrderForm = () => {
    const [orderId, setOrderId] = useState();
    const [trackResult, setTrackResult] = useState([]);

    const handleSubmit = (e) => {
        console.log(orderId)
        fetch(`https://jhotphodelivery.herokuapp.com/bookedService/${orderId}`)
        .then(res => res.json())
        .then(data => setTrackResult(data[0]))
        e.preventDefault();
    }
    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div className='row mt-5 d-flex align-items-center justify-content-center'>
                <div className="col-md-5">
                    <div className="mb-4">
                        <input name='orderId' type="text" required className="form-control" onChange={(e)=> setOrderId(e.target.value)} placeholder="Enter Order ID..." />
                    </div>
                </div>
                <div className="col-md-2">
                    <button type='submit' className="btn btn-success">Track</button>
                </div>
                <div className="col-md-5">
                    <div className="card border-secondary mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header">
                            {
                                trackResult?.status === 'Pending' 
                                ? <button disabled class="btn btn-danger">{trackResult?.status} </button>
                                : status === 'Ongoing'
                                ? <button disabled class="btn btn-warning">{trackResult?.status} </button>
                                : <button disabled class="btn btn-success">{trackResult?.status} </button>
                            }
                        </div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">{trackResult?.name}</h5>
                            <h6 className='text-success'>{trackResult?.service?.name}</h6>
                            <small className="card-text">{trackResult?.service?.description}</small>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    );
};

export default TrackOrderForm;