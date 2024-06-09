import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


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
                        {/* row 1 */}
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
                                        <div className="font-bold">{bookings.customerName}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">delete</button>
                            </th>
                        </tr>
                       
                    </tbody>
               
                
                </table>
            </div>
        </>
    );
};

export default MyBookings;