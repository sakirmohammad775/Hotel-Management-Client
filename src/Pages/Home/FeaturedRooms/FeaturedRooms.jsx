
function FeaturedRooms() {
  const rooms = [
    {
      name: 'Suite Room',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      price: '$450 / NIGHT',
      image: 'https://i.ibb.co.com/xLPb8Q4/1-W34-Lpsd-Ob7-Tb-Oy-Kcto-Sm6w.jpg', // Replace with your image path
      reverse: true, // Add reverse property for Suite Room
    },
    {
      name: 'Deluxe Room',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      price: '$450 / NIGHT',
      image: 'https://i.ibb.co.com/xLPb8Q4/1-W34-Lpsd-Ob7-Tb-Oy-Kcto-Sm6w.jpg', // Replace with your image path
      reverse: false, // Default order for Deluxe Room
    },
    {
      name: 'Family Room',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      price: '$450 / NIGHT',
      image: 'https://i.ibb.co.com/xLPb8Q4/1-W34-Lpsd-Ob7-Tb-Oy-Kcto-Sm6w.jpg', // Replace with your image path
      reverse: true, // Add reverse property for Family Room
    },
  ];

  return (
    <div className="text-center py-16 px-4 bg-gray-100">
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-500 mb-1">OUR ROOMS</p>
        <h2 className="text-4xl font-semibold">Featured Rooms</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            {room.reverse ? (
              <>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{room.price}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                      BOOK NOW
                    </button>
                  </div>
                </div>
                <div className="h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
              </>
            ) : (
              <>
                <div className="h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{room.price}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <p className="mt-12 text-sm text-gray-500">
        <a href="https://preview.colorlib.com/theme/unwind/room-single.html" className="text-blue-500">
          https://preview.colorlib.com/theme/unwind/room-single.html
        </a>
      </p>
    </div>
  );
}

export default FeaturedRooms;