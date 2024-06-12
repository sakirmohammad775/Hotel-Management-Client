import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const handleDelete = async (id) => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            try {
                const response = await fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE',
                });
                const data = await response.json();
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                } else {
                    alert('Failed to delete. Item may not exist.');
                }
            } catch (error) {
                console.error('Error deleting booking:', error);
                alert('An error occurred while deleting the booking.');
            }
        }
    }

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                //
            }
        })
    }
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
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                        }
                    </tbody>


                </table>
            </div>
        </>
    );
};

export default MyBookings;