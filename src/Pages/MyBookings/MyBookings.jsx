import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result)=>{
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE',
                    });
                    const data = await response.json();
                    console.log(data);
                    if (data.deletedCount > 0) {
                        // alert('Deleted successfully');
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
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

        })
        
    }

    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //update
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated=bookings.find(booking=>booking._id===id)
                    updated.status='confirm'
                    const newBookings=[updated,...remaining]
                    setBookings(newBookings)
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