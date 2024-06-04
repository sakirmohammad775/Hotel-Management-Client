import { Button, Card, CardBody, CardFooter, CardHeader, Carousel, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { FaCameraRetro, FaCheck, FaFire, FaHome, FaStar, FaWifi } from "react-icons/fa";
import RoomContext from "../../../Provider/RoomProvider";
import { useParams } from "react-router-dom";
import { MdMonitor } from "react-icons/md";


const RoomDetails = () => {
    const rooms = useContext(RoomContext)
    const { id } = useParams()
    const [room, setRoom] = useState(null)

    useEffect(() => {
        const foundRoom = rooms.find(room => room._id === id)
        console.log(foundRoom);
        setRoom(foundRoom)
    }, [id, rooms])
    if (!room) {
        return <div>Not Available..........</div>
    }

    return (
        <>
            <Carousel className="rounded-xl">
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
            </Carousel>

            <h3 className="text-3xl font-bold text-center mt-10 text-gray-800">{room.room_description}</h3>
            <div className="flex w-full mt-10">
                {/* left side */}
                <div className="w-2/3">
                    <Card className="w-full  shadow-lg">
                        <CardHeader floated={false} color="blue-gray">
                            <img src={room.room_images} alt="ui/ux review check" />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <IconButton
                                size="sm"
                                color="red"
                                variant="text"
                                className="!absolute top-4 right-4 rounded-full"
                            >

                            </IconButton>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-medium">
                                    {room.room_description}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    {room.ratings}
                                    <FaStar fill="currentColor"
                                        className="-mt-0.5 h-5 w-5 text-yellow-700" />

                                </Typography>
                            </div>
                            <Typography color="gray">
                                <p>Mountain View Rooms</p>
                                <p>Oceanfront Suites</p>
                                <p>Garden View Balconies</p>
                                <p>  Riverside Cottages</p>
                                <p>Forest View Villas</p>
                                <p> Lakefront Lodges</p>

                            </Typography>
                            <div className="group mt-8 inline-flex flex-wrap items-center gap-16">
                                <Tooltip content="$129 per night">
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        <FaCameraRetro />
                                    </span>
                                </Tooltip>
                                <Tooltip content="Free wifi">
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        <FaWifi />
                                    </span>
                                </Tooltip>
                                <Tooltip content="2 bedrooms">
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        <FaHome />
                                    </span>
                                </Tooltip>
                                <Tooltip content={`65" HDTV`}>
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        <MdMonitor />
                                    </span>
                                </Tooltip>
                                <Tooltip content="Fire alert">
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        <FaFire />
                                    </span>
                                </Tooltip>
                                <Tooltip content="And +20 more">
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                        +20
                                    </span>
                                </Tooltip>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-3">
                            <Button size="lg" fullWidth={true}>
                                Reserve
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                {/* right side */}
                <div className="w-1/3">
                    <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8 mt-5">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-bold uppercase tracking-widest"
                            >
                                Facilities
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">${room.price}</span>{" "}
                                <span className="self-end text-4xl">/Day</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <FaCheck />
                                    </span>
                                    <Typography className="font-normal">{room.special_offers}</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <FaCheck />
                                    </span>
                                    <Typography className="font-normal">50+ components</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <FaCheck />
                                    </span>
                                    <Typography className="font-normal">Swimming Pool facilities</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <FaCheck />
                                    </span>
                                    <Typography className="font-normal">Ratings {room.ratings}</Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <FaCheck />
                                    </span>
                                    <Typography className="font-normal">
                                        More Privacy Provided
                                    </Typography>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <FaCheck />
                                    </span>
                                    <Typography className="font-normal">
                                       {room.room_size} Room
                                    </Typography>
                                </li>
                            </ul>
                        </CardBody>
                        <CardFooter className="mt-12 p-0">
                            <Button
                                size="lg"
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Book Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

            </div>
        </>
    );
};

export default RoomDetails;