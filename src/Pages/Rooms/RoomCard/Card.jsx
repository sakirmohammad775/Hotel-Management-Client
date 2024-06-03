import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";


const Card = () => {
    const[rooms,setRooms]=useState([])
    useEffect(()=>{
        const fetchRooms = async () => {
            try {
              const response = await axios.get('http://localhost:5000/rooms');
              setRooms(response.data);
              console.log(response);
            } catch (error) {
              console.error('Error fetching the hotels', error);
            }
          };
          fetchRooms();
        }, []);
    
    return (
        <>
        <h1>Hotel Management</h1>
        <h3>total available room:{rooms.length}</h3>
        <div className="grid grid-cols-3">
            {
                rooms.map(room=>(<RoomCard key={room._id} room={room}></RoomCard>))
            }
        </div>
        </>
    );
};

export default Card;