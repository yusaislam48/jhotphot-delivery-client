import React, { useState } from 'react';

const MakeAdminForm = () => {
    const [email, setEmail] = useState();
    const handleSubmit = (e) => {
        const newAdminData = {
            email: email,
            role: 'Admin',
        }
        e.preventDefault();

        fetch('http://localhost:4000/addAdmin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdminData)
        })
        .then(res => {
            console.log('server site res', res)
            if(res.status == 200){
                alert('Added Successfully!')
            }
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='row mb-5'>
                <div className='col-md-6'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input name='name' onChange={(e)=>setEmail(e.target.value)} type="email" required class="form-control" id="exampleFormControlInput1" placeholder="abc@email.com"/>
                    </div>

                    <button type='submit' className="btn btn-success">Add Admin</button>
                </div>
            </div>
        </form>
    );
};

export default MakeAdminForm;