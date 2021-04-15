import React from 'react';

const Table = () => {
    return (
        <>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>
                            <form onChange={(e)=>console.log('changed', e.target.value)}>
                        <select class="form-select form-control" id="inputGroupSelect01">
                            <option selected>Pending</option>
                            <option value="Done">Done</option>
                            <option value="Ongoing">Ongoing</option>
                        </select></form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Table;