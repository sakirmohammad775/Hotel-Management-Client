import  { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map = () => {
  const [selected, setSelected] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [attractions, setAttractions] = useState([]);

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.748817, // Example latitude
    lng: -73.985428 // Example longitude
  };

  useEffect(() => {
    // Fetch data for hotels and attractions from your API or database
    // Example hardcoded data:
    const fetchedHotels = [
      { id: 1, name: "Hotel One", location: { lat: 40.749933, lng: -73.98633 } },
      { id: 2, name: "Hotel Two", location: { lat: 40.747933, lng: -73.98433 } }
    ];
    const fetchedAttractions = [
      { id: 1, name: "Attraction One", location: { lat: 40.748817, lng: -73.985428 } },
      { id: 2, name: "Attraction Two", location: { lat: 40.750817, lng: -73.987428 } }
    ];
    setHotels(fetchedHotels);
    setAttractions(fetchedAttractions);
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      >
        {hotels.map(hotel => (
          <Marker 
            key={hotel.id} 
            position={hotel.location} 
            onClick={() => setSelected(hotel)} 
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }}
          />
        ))}
        {attractions.map(attraction => (
          <Marker 
            key={attraction.id} 
            position={attraction.location} 
            onClick={() => setSelected(attraction)} 
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            }}
          />
        ))}
        {selected && (
          <InfoWindow
            position={selected.location}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>{selected.name}</h2>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
