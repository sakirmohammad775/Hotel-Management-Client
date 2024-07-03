

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, email, date, price, status } = booking


    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{email}</div>
                            <div className="text-sm opacity-50">{customerName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {date}
                </td>
                
                <th>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </th>
                <td>
                    {status === "confirm" ? <><button className="btn text-green-500">Confirmed</button></> :
                        <button onClick={() => handleBookingConfirm(_id)}>Confirm</button>}
                </td>
            </tr>

        </>
    );
};

export default BookingRow;