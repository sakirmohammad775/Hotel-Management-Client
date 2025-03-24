
import './Footer.css'; // Assuming you have a CSS file named Footer.css

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="unwind-info">
          <h3 className="unwind-logo">Unwind</h3>
          <p className="hotel-booking">HOTEL BOOKING</p>
          <p className="description">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              {/* Replace with Twitter icon */}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              {/* Replace with Facebook icon */}
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              {/* Replace with Instagram icon */}
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="services">
          <h3>Services</h3>
          <ul className="service-list">
            <li> Free Wifi</li>
            <li> Easy Booking</li>
            <li> Restaurant</li>
            <li> Swimming Pool</li>
            <li> Beauty & Health</li>
            <li> 60 Flatscreen TV</li>
            <li> Cold Aircondition</li>
            <li> Help & Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-section">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul className="link-list">
            <li> Home</li>
            <li> About</li>
            <li> Rooms</li>
            <li> Resto & Bar</li>
          </ul>
        </div>
      </div>

      <div className="footer-section">
        <div className="contact-info">
          <h3>Have a Questions?</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <p>
            <i className="fas fa-phone"></i> +2 392 3929 210
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@yourdomain.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;