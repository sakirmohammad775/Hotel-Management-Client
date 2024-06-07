
import { useContext } from "react";
import { FaCameraRetro, FaWifi } from "react-icons/fa";
import { FcDataProtection } from "react-icons/fc";
import RoomContext from "../../../Provider/RoomProvider";
import CheckAvailability from "../../../Shared/ChackAvailibility/CheckAvailibility";

const FeaturedRooms = () => {
    const rooms = useContext(RoomContext)
    return (

        <>
            <div className="w-full max-w-screen-xl">
                {/* left side */}
                <div className="grid grid-cols-2 w-2/3">
                    {rooms.map(room => (<div key={room._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="relative">
                                <img src={room.image} alt="Shoes" />
                                <button className="-mt-52 ml-[340px] absolute">Top</button>
                            </div>
                            <div className="">
                                <div className="flex mt-3">
                                    <h2 className="mr-10">sleeps 2,Queen Bed </h2>
                                    <div className="Flex gap-5"><FaCameraRetro />
                                        <FaWifi />
                                        <FcDataProtection /></div>
                                </div>

                                <div>
                                    <h3 className="UpperCase font-semibold font-serif text-gray-800">AMbassador Suite</h3>
                                    <p className="text-gray-800">One world of caution:make sure your client knows that Lorem ipsum dolor sit amet consectetur </p>
                                </div>
                            </div>
                        </div>
                    </div>))
                    }
                </div>
                {/* right side */}
                <div className="w-1/3">
                <CheckAvailability></CheckAvailability>
                </div>
            </div>
        </>
    );
};

export default FeaturedRooms;