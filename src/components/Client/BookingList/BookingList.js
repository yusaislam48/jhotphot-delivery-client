import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
import SideBarClient from '../SideBarClient/SideBarClient';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookedServices, setBookedServices] = useState([]);
    useEffect(()=>{
        fetch(`https://jhotphodelivery.herokuapp.com/bookedServices/${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setBookedServices(data))
    }, [bookedServices])

    return (
        <div className="container-fluid row " >
            <SideBarClient></SideBarClient>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Booking List</h5>
                
                 <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                     {
                         bookedServices.map(bookedService => <BookingListCard key={bookedService._id} bookedService={bookedService}></BookingListCard>)
                     }
                 </div>
            </div>
        </div>
    );
};

export default BookingList;