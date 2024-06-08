import { useContext, useState } from "react";
import  "./CheckOut.css"
import RoomContext from "../../Provider/RoomProvider";

const CheckOut = () => {
    const room =useContext(RoomContext)
    const [form, setForm] = useState([]);
    


    return (
        <>
        <h3>{room.title}</h3>
            <div className="hotel-booking-form">
                <h2>Bookings:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email"  />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="tel" name="phone" />
                    </div>
                    <div>
                        <label>Check-in Date</label>
                        <input type="date" name="checkInDate"  />
                    </div>
                    <div>
                        <label>Check-out Date</label>
                        <input type="date" name="checkOutDate"  />
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
                        <input type="text" name="cardName"  />
                    </div>
                    <div>
                        <label>Expiry Date</label>
                        <input type="text" name="expiryDate" />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" name="cvv"  />
                    </div>
                    <button type="submit">Booking Confirm</button>
                </form>
            </div>
        </>
    );
};

export default CheckOut;