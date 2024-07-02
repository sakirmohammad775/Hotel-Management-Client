
import { useContext, } from "react";
import RoomCard from "./RoomCard";
import RoomContext from "../../../Provider/RoomProvider";


const Card = () => {
   const rooms=useContext(RoomContext)
    
    return (
        <>
       
        
        <div className="grid lg:grid-cols-3">
            {
                rooms.map(room=>(<RoomCard key={room._id} room={room}></RoomCard>))
            }
        </div>
        </>
    );
};

export default Card;