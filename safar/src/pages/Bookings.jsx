// // function Bookings() {
// //   return (
// //     <div className="text-center mt-5">
// //       <h2>Your Bookings</h2>
// //       <p>View and manage all your travel bookings here.</p>
// //     </div>
// //   );
// // }

// // export default Bookings;
import React, { useState } from 'react';
import axios from 'axios';
import styles from './Bookings.module.css';

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    travellers: 1,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.travellers || formData.travellers < 1) newErrors.travellers = 'Minimum 1 traveller required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setSuccessMessage('Booking successful!');
      setFormData({
        name: '',
        email: '',
        destination: '',
        date: '',
        travellers: 1,
      });
      setErrors({});
    } catch (error) {
      console.error('Booking error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className={styles.bookingSection}>
      <h2 className={styles.title}>Book Your Trip</h2>
      <p className={styles.title}>View and manage all your travel bookings here.</p>

      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div>
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
          {errors.destination && <small>{errors.destination}</small>}
        </div>

        <div>
          <label>Date of Travel:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <small>{errors.date}</small>}
        </div>

        <div>
          <label>Number of Travellers:</label>
          <input
            type="number"
            name="travellers"
            value={formData.travellers}
            onChange={handleChange}
            min="1"
          />
          {errors.travellers && <small>{errors.travellers}</small>}
        </div>

        <button type="submit">Submit</button>

        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      </form>
    </section>
  );
};

export default Bookings;
