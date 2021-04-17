import React from 'react';

const BookingListCard = ({bookedService}) => {
    const {_id, name, email, paymentId, status, payingMethod} = bookedService;
    const payID = paymentId.slice(10, 20);
    
    return (
            <div class="col mb-3">
                <div class="card h-100">
                    <div className="row pt-2 px-2">
                        <div className="col-md-8">
                            <img style={{width: '150px', borderRadius: '50px'}} src={bookedService?.service?.imageUrl} class="card-img-top" alt={name} />
                        </div>
                        <div className="col-md-4">
                            {
                                status === 'Pending' 
                                ? <button disabled class="btn btn-danger">{status} </button>
                                : status === 'Ongoing'
                                ? <button disabled class="btn btn-warning">{status} </button>
                                : <button disabled class="btn btn-success">{status} </button>
                            }
                            
                        </div>
                    </div>
                    <div class="card-body">
                        <h6>Order Id: {_id}</h6>
                        <h5 class="card-title">{bookedService?.service?.name}</h5>
                        <h6 className="text-info">Service Charge: {bookedService?.service?.serviceCharge}৳</h6>

                        <p class="card-text">{bookedService?.service?.description}</p>
                        <small className='text-info'>{name} ( {email} )</small><br/>
                        <small className='text-secondary'>Payment Method: {payingMethod} ( {payID} )</small>
                    </div>
                </div>
            </div>
    );
};

export default BookingListCard;