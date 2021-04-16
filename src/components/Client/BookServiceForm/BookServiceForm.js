import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import StripePayment from '../StripePayment/StripePayment';

const BookServiceForm = ({id}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    const [nextBtn, setNextBtn] = useState(null);
    const history = useHistory();
    useEffect(()=>{
        fetch(`https://jhotphodelivery.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data[0]))
    }, [])

    const handleSubmit = (e) => {
        setNextBtn('1');
        e.preventDefault();
    }
    
    const handlePaymentSuccess = paymentId =>{
        const bookingServiceData = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            service: service,
            paymentId: paymentId,
            payingMethod: 'Stripe Card',
            status: 'Pending',
            date: new Date(),
        }
        console.log(bookingServiceData);

        fetch('https://jhotphodelivery.herokuapp.com/bookingService', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingServiceData)
        })
        .then(res => {
            console.log('server site res', res)
            if(res.status == 200){
                alert('Booked Successfully!');
                history.push('/client/bookingList')
            }
        })

    }
    
    

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div className='row mt-5'>
            <div style={{display: nextBtn ? 'none' : 'block'}} className='col-md-6'>
                <div class="mb-3">
                    <input name='name' value={loggedInUser.name} type="text" required class="form-control" placeholder="Enter Your Name..." disabled/>
                </div>
                <div class="mb-3">
                    <input value={loggedInUser.email} name='email' type="email" required class="form-control" placeholder="Enter Your Email..." disabled/>
                </div>
                <div class="mb-3">
                    <input value={service?.name} name='service' type="text" required class="form-control" placeholder="Enter Service Name..." disabled/>
                </div>
                <button type='submit' className="btn btn-success">Submit</button>

            </div>
        </div>
        </form>
        <div style={{display: nextBtn ? 'block' : 'none'}}  className='pt-4'>
            <StripePayment handlePayment={handlePaymentSuccess}></StripePayment>
        </div>
        </div>
    );
};

export default BookServiceForm;