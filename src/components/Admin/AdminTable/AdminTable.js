import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminTable = ({admin}) => {
    
    const handleDeleteBtn = () => {
        fetch(`http://localhost:4000/deleteAdmin/${admin._id}`, {
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
                    <th scope="row">{admin.email}</th>
                    <td>{admin.role}</td>
                    <td>
                        <button onClick={handleDeleteBtn} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default AdminTable;