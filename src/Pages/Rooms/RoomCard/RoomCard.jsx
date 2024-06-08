
import { Link } from "react-router-dom";



const RoomCard = ({ room }) => {
    const { _id,room_description,price, images, short_description, available } = room

    return (
        <>
            <div className="card card-compact w-[340px] bg-base-100 shadow-xl">
                <figure><img src={images} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{room_description}</h2>
                    <p>Price per Night : {price}$</p>
                    <div className="card-actions justify-end">
                    <Link to={`/rooms/${_id}`}><button className="btn btn-primary">Details</button></Link>
                        
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default RoomCard;