import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";



const RoomCard = ({ room }) => {
    const { title, image, price, short_description, available } = room
    return (
        <>
            <Link to="/roomDetails">
                <Card className="w-full max-w-[68rem] mx-auto flex-row">
                    <CardHeader shadow={false} floated={false}
                        className="m-0 w-2/5 shrink-0 rounded-r-none">
                        <img
                            src={image}
                            alt="card-image"
                            className="h-full w-full object-cover"
                        />
                    </CardHeader>

                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase">
                            {title}</Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {price}

                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                            {short_description}
                        </Typography>
                        <Button variant="text" className="flex items-center gap-2">
                            Show Details

                        </Button>
                    </CardBody>
                </Card>
            </Link>
        </>
    );
};

export default RoomCard;