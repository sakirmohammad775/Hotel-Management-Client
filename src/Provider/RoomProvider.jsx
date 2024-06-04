import axios from "axios";
import {  createContext, useEffect, useState } from "react";

 const RoomContext = createContext()

export const RoomProvider = ({children}) => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('http://localhost:5000/rooms')
                setRooms(response.data)
            } catch (error) {
                console.error('Error fetching the hotels', error);
            }
        }
        fetchRooms()
    }, [])
    return (
        <>
            <RoomContext.Provider value={rooms}>
                {children}
            </RoomContext.Provider>
        </>
    );
};

export default RoomContext;