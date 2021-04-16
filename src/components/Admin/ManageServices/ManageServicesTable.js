import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageServicesTable = ({service}) => {
    const {_id, name} = service;
    const id = _id.slice(20,24)
    
    const handleDeleteBtn = () => {
        fetch(`http://localhost:4000/deleteService/${_id}`, {
        method: "DELETE"
        })
        .then(res => {
            console.log(res)
            if(res.status == 200){
                alert('Deleted Successfully!')
            }
        })
    }
    

    return (
        <>
            <tbody>
                <tr>
                    <th scope="row">{id}</th>
                    <td>{name}</td>
                    <td>
                        <button onClick={handleDeleteBtn} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default ManageServicesTable;