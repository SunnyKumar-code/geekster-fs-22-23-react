import { useParams } from "react-router-dom";

const hotels = [
    {
        hotelId: 1,
        name: "Grand Exotica"
    },
    {
        hotelId: 2,
        name: "Hotel Atlanta View"
    },
    {
        hotelId: 3,
        name: "Palm Hotel"
    }
]


const HotelDetails = () => {
    // HotelID?
    const params = useParams();
    const hotelDetails = hotels.find(hotel => hotel.hotelId == params.hotelId);

    return (
        <>
            <h1>Hotel Details Screen</h1>
            <h2>{hotelDetails.name}</h2>
        </>
    )
};

export default HotelDetails;