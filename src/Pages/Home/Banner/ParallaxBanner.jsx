// src/ParallaxBanner.jsx

import '../Banner/ParallaxBanner.css'

const ParallaxBanner = () => {
  const banners = [
    {
      image: 'https://via.placeholder.com/1500x600?text=Image+1',
      text: 'Welcome to My Website',
      subtext: 'This is the first parallax banner example'
    },
    {
      image: 'https://via.placeholder.com/1500x600?text=Image+2',
      text: 'Another Section',
      subtext: 'This is the second parallax banner example'
    },
    {
      image: 'https://via.placeholder.com/1500x600?text=Image+3',
      text: 'More Content',
      subtext: 'This is the third parallax banner example'
    }
  ];

  return (
    <div className="parallax-container">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="parallax-section"
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className="parallax-content">
            <h1>{banner.text}</h1>
            <p>{banner.subtext}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParallaxBanner;
