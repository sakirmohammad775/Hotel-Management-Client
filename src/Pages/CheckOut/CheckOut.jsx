import { useContext, useState } from "react";
import  "./CheckOut.css"
import RoomContext from "../../Provider/RoomProvider";

const CheckOut = () => {
    const room =useContext(RoomContext)
    const [form, setForm] = useState([]);
    
    
      const handleChange = e => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted', form);
      };

    return (
        <>
        <h3>{room.title}</h3>
            <div className="hotel-booking-form">
                <h2>Bookings:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Check-in Date</label>
                        <input type="date" name="checkInDate" value={form.checkInDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Check-out Date</label>
                        <input type="date" name="checkOutDate" value={form.checkOutDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Room Type</label>
                        <select name="roomType" value={form.roomType} onChange={handleChange} required>
                            <option value="single">Single</option>
                            <option value="double">Double</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>
                    <div>
                        <label>Number of Guests</label>
                        <input type="number" name="guests" value={form.guests} onChange={handleChange} required min="1" />
                    </div>
                    <div>
                        <label>Card Number</label>
                        <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Name on Card</label>
                        <input type="text" name="cardName" value={form.cardName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Expiry Date</label>
                        <input type="text" name="expiryDate" value={form.expiryDate} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>CVV</label>
                        <input type="text" name="cvv" value={form.cvv} onChange={handleChange} required />
                    </div>
                    <button type="submit">Booking Confirm</button>
                </form>
            </div>
        </>
    );
};

export default CheckOut;