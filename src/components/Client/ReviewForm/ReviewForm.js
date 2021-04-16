import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [company, setCompany] = useState();
    const [designation, setDesignation] = useState();

    const handleSubmit = (e) => {
        const review = {
            name: loggedInUser.name,
            image: loggedInUser.image,
            company: company,
            description: description,
            designation: designation,
        }
        console.log(review)
        e.preventDefault();

        fetch('https://jhotphodelivery.herokuapp.com/addReview', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(res => {
            console.log('server site res', res)
            if(res.status == 200){
                alert('Submitted Successfully!')
            }
        })
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-md-6'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                    <input name='name' disabled value={loggedInUser.name} type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Write your name here..."/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Company Name</label>
                    <input name='name' onChange={(e)=>setCompany(e.target.value)} type="text" required class="form-control" id="exampleFormControlInput2" placeholder="Write your company's name here..."/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput3" class="form-label">Designation</label>
                    <input name='name' onChange={(e)=>setDesignation(e.target.value)} type="text" required class="form-control" id="exampleFormControlInput3" placeholder="Write your designation here..."/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)}  name='description' class="form-control" id="exampleFormControlTextarea1" placeholder='Write the service description here...' rows="3"></textarea>
                </div>
                <button type='submit' className="btn btn-success">Submit</button>
            </div>
            <div className="col-md-6">
                
            </div>
        </div>
        </form>
    );
};

export default ReviewForm;