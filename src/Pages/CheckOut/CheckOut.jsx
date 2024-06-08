
import "./CheckOut.css"
import RoomContext from "../../Provider/RoomProvider";
import { useContext, useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const rooms = useContext(RoomContext)
    const {user}=useContext(AuthContext)
    const { id } = useParams()
    const [room, setRoom] = useState(null)

    useEffect(() => {
        const foundRoom = rooms.find(room => room._id === id)
        setRoom(foundRoom)
    }, [id, rooms])
    if (!room) {
        return <div>Not Available..........</div>
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const email=user?.value
        const checkInDate=form.checkInDate.value  
        const order={
            customerName:name,
            date:checkInDate,
            email,
            room
        }
        console.log(order);
      }

    return (
        <>
         
            <div className="hotel-booking-form">
                <h2>Bookings:{room.price}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" defaultValue={user?.display_Name} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" defaultValue={user?.email}/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="tel" name="phone" />
                    </div>
                    <div>
                        <label>Check-in Date</label>
                        <input type="date" name="checkInDate" />
                    </div>
                    <div>
                        <label>Check-out Date</label>
                        <input type="date" name="checkOutDate" />
                    </div>
                    <div>
                        <label>Room Type</label>
                        <select name="roomType" >
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>
                    <div>
                        <label>Number of Guests</label>
                        <input type="number" name="guests" required min="1" />
                    </div>
                    <div>
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" />
                    </div>
                    <div>
                        <label>Name on Card</label>
                        <input type="text" name="cardName" />
                    </div>
                    <div>
                        <label>Expiry Date</label>
                        <input type="text" name="expiryDate" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" name="cvv" />
                    </div>
                    <button type="submit">Booking Confirm</button>
                </form>
            </div>
        </>
    );
};

export default CheckOut;