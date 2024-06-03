import { useLoaderData } from "react-router-dom";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Card from "../RoomCard/Card";
import RoomCard from "../RoomCard/RoomCard";


const Rooms = () => {
    const rooms=useLoaderData()
    return (
        <>
        <CarouselBanner></CarouselBanner>
        <RoomCard></RoomCard>
        <Card></Card>
        <div>total:{rooms.length}</div>
        </>
    );
};

export default Rooms;