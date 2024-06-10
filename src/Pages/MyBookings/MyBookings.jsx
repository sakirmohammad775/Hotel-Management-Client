import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const MyBookings = () => {
    const{user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    

    const url =`http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    })
    return (
        <>
        <h3>{bookings.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th> User Name</th>
                            <th>Bookings</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bookings.map(booking=><BookingRow key={booking._id} booking={booking}></BookingRow>)
                        }
                    </tbody>
               
                
                </table>
            </div>
        </>
    );
};

export default MyBookings;