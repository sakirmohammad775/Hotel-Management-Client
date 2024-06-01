import { useEffect, useState } from "react";



const Card3 = () => {
    const [carItems, setCarItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/do')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error('error fetching cart', error))

    }, [])


    return (
        <>
            
        </>
    );
};

export default Card3;