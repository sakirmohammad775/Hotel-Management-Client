import { useState } from 'react';
import './CheckAvailability.css';

const CheckAvailability = () => {
  const [form, setForm] = useState({
    checkInDate: '',
    checkOutDate: '',
    people: 1
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted', form);
  };

  return (
    <div className="check-availability">
      <h2>Check Availability</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Check-in Date
          </label>
          <input
            type="date"
            name="checkInDate"
            value={form.checkInDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            
          </label>
          <input
            type="date"
            name="checkOutDate"
            value={form.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>
            People
          </label>
          <input
            type="number"
            name="people"
            value={form.people}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        <button type="submit">SEARCH</button>
      </form>
      <a href="#" className="search-criteria">
        Search by criteria
      </a>
    </div>
  );
};

export default CheckAvailability;
