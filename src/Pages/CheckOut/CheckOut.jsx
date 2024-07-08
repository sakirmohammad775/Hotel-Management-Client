
import "./CheckOut.css"
import RoomContext from "../../Provider/RoomProvider";
import { useContext, useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const rooms = useContext(RoomContext)
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [room, setRoom] = useState(null)

    useEffect(() => {
        const foundRoom = rooms.find(room => room._id === id)
        setRoom(foundRoom)
    }, [id, rooms])
    if (!room) {
        return <div>Not Available..........</div>
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = user?.email
        const checkInDate = form.checkInDate.value
        const review=form.review.value
        const comment=form.comment.value
        const price=form.price.value

        const booking = {
            customerName: name,
            date: checkInDate,
            email,
            review,
            comment,
            price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    

    return (
        <>

            <div className="hotel-booking-form">
                <h2>Bookings:</h2>
                <form onSubmit={handleSubmit}>
                    <div className=" grid md:grid-cols-2 gap-x-5" >
                        <div >
                            <label>Name</label>
                            <input type="text" name="name" defaultValue={user?.display_Name} placeholder="Your Name" className="input input-bordered w-full " required/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" className="input input-bordered w-full " name="email" defaultValue={user?.email} />
                        </div>
                        <div>
                            <label>Phone Number</label>
                            <input className="input input-bordered w-full " type="tel" name="phone" />
                        </div>
                        <div>
                            <label>Check-in Date</label>
                            <input className="input input-bordered w-full " type="date" name="checkInDate" required />
                        </div>
                        <div>
                            <label>Check-out Date</label>
                            <input className="input input-bordered w-full " type="date" name="checkOutDate" />
                        </div>
                        <div>
                            <label>Room Type</label>
                            <select className="input input-bordered w-full " name="roomType" required >
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                                <option value="suite">Suite</option>
                            </select>
                        </div>
                        <div>
                            <label>Number of Guests</label>
                            <input className="input input-bordered w-full " type="number" name="guests" required min="1" />
                        </div>
                        <div>
                            
                            <input className="input input-bordered w-full " type="text" name="cardNumber" />
                        </div>
                        <div>
                            <label>Price</label>
                            <input className="input input-bordered w-full " type="text" name="price" defaultValue={'90'} />
                        </div>
                        <div>
                            <label>Comment</label>
                            <input className="input input-bordered w-full " type="text" name="comment" required/>
                        </div>
                        <div>
                            <label>Review</label>
                            <input className="input input-bordered w-full " type="text" name="review" required />
                        </div>
                    </div>
                    <button className="w-full" type="submit">Booking Confirm</button>
                </form>
            </div>

        </>
    );
};

export default CheckOut;