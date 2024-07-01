
import { useContext } from "react";
import { FaCameraRetro, FaWifi } from "react-icons/fa";
import { FcDataProtection } from "react-icons/fc";
import RoomContext from "../../../Provider/RoomProvider";
import CheckAvailability from "../../../Shared/CheckAvailability/CheckAvailability";

const FeaturedRooms = () => {
    const rooms = useContext(RoomContext)
    return (

        <>
            <h3 className="font-bold text-gray-800 text-2xl italic my-8 text-center">Featured Rooms</h3>
            <div className="w-full md:flex text-gray-600">
                {/* left side */}
                <div className="grid md:grid-cols-2 gap-y-10 w-2/3">
                    {rooms.filter(room => room.availability === "Available" && room.special_offers !== "No special offers available").map(room => (<div key={room._id}>
                        <div className=" w-[320px] bg-base-100 shadow-xl">
                            <div className="relative">
                                <img src={room.images} alt="Shoes" />
                                <button className="-mt-52 ml-64 btn absolute">Top</button>
                            </div>
                            <div className="">
                                <div className="flex mt-3">
                                    <h2 className="mr-10">Sleeps 2,Queen Bed </h2>
                                    <div className="Flex gap-5"><FaCameraRetro />
                                        <FaWifi />
                                        <FcDataProtection /></div>
                                </div>

                                <div>
                                    <h3 className="UpperCase font-semibold font-serif text-gray-800">{room.room_description
                                    }</h3>
                                    <p className="text-gray-800">{room.
                                        special_offers
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>))
                    }
                </div>
                {/* right side */}
                <div className="w-1/3">
                    
                </div>
            </div>
        </>
    );
};

export default FeaturedRooms;