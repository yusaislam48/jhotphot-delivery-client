import React, { useState } from 'react';

const Table = ({service}) => {
    const {_id, name, email, payingMethod, status} = service;
    const id = _id.slice(20, 24);

    
    const handleUpdate = (e) =>{
        const updateStatus = e.target.value;

        const updateServiceData = {_id, updateStatus};

        fetch('http://localhost:4000/updateService', {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateServiceData)
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount == 1){
                alert('Update Successfully!')
            }
        })
    }

    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{service?.service?.name}</td>
                    <td>{payingMethod}</td>
                    <td>
                    <form onChange={handleUpdate}>
                        <select value="ff" class="form-select form-control" id="inputGroupSelect01">
                            <option selected>{status}</option>
                            <option value='Pending'>Pending</option>
                            <option value="Done">Done</option>
                            <option value="Ongoing">Ongoing</option>
                        </select>
                    </form>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default Table;