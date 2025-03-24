/* eslint-disable no-unused-vars */
import React from 'react';
import './Banner.css'; // Assuming you have a CSS file for styling
import Navbar from '../../../Shared/Navbar/Navbar';

function UnwindHotel() {
  return (
    <div className="unwind-hotel" >
        <Navbar></Navbar>
      

      <section className="hero">
        <div className="hero-content">
          <h1>Most Relaxing Place</h1>
          <p>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</p>
          <div className="buttons">
            <button className="tour-button">TAKE A TOUR</button>
            <button className="learn-button">LEARN MORE</button>
          </div>
        </div>
      </section>

      <section className="booking-form">
        <div className="form-fields">
          <input type="text" placeholder="CHECK-IN" />
          <input type="text" placeholder="CHECK-OUT" />
          <input type="text" placeholder="ROOMS" />
          <input type="text" placeholder="GUESTS" />
          <button className="check-button">CHECK</button>
        </div>
      </section>
    </div>
  );
}

export default UnwindHotel;