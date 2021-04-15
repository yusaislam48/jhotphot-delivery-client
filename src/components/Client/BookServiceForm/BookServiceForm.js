import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const BookServiceForm = ({id}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/services/${id}`)
        .then(res => res.json())
        .then(data => setService(data[0]))
    }, [])

    const handleSubmit = (e) => {
        const serviceData = {
            name: loggedInUser.name,
            email: loggedInUser.email,
        }
        e.preventDefault();
        console.log(serviceData)

    }
    
    

    return (
        <form onSubmit={handleSubmit}>
        <div className='row mt-5'>
            <div className='col-md-6'>
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
    );
};

export default BookServiceForm;