import React, { useState } from 'react';
import axios from 'axios';

const AddServiceForm = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState(null);
    const handleSubmit = (e) => {
        const serviceData = {
            name: name,
            description: description,
            imageUrl: image,
        }
        e.preventDefault();

        fetch('http://localhost:4000/addService', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
        .then(res => {
            console.log('server site res', res)
            if(res.status == 200){
                alert('Submitted Successfully!')
            }
        })
    }
    
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'a58da14904622c7db2663f8c5fda2762');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='col-md-6'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Service Title</label>
                    <input name='name' onChange={(e)=>setName(e.target.value)} type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Home Delivery Service"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)}  name='description' class="form-control" id="exampleFormControlTextarea1" placeholder='Write the service description here...' rows="3"></textarea>
                </div>
            </div>
            <div className="col-md-6">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Add Photo <span style={{color:'tomato'}}>(Wait 10-15 sec)</span></label>
                    <input className="form-control mb-2" name="image" type="file" onChange={handleImageUpload} id='formFile'/>
                    {
                        image && <p style={{color:'green'}}>Image uploaded successFully</p>
                    }
                </div>
                <button type='submit' className="btn btn-success">Submit</button>
            </div>
        </div>
        </form>
    );
};

export default AddServiceForm;