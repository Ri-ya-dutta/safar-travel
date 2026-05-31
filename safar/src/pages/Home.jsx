// function Home() {
//   return (
//     <div className="text-center mt-5">
//       <h2>Discover Your Next Destination</h2>
//       <p>Explore amazing places and plan unforgettable journeys.</p>
//     </div>
//   );
// }

// export default Home;
// src/pages/Home.jsx
//import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';

const highlights = [
  {
    id: 1,
    title: 'Easy Booking',
    description: 'Hassle-free booking process with instant confirmation.',
    icon: '📆',
  },
  {
    id: 2,
    title: 'Verified Destinations',
    description: 'All destinations are personally verified by our experts.',
    icon: '✅',
  },
  {
    id: 3,
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance at your service.',
    icon: '🕑',
  },
];

  const Home = () => {
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Escape to Your Dream Destination</h1>
          <p>Book your perfect getaway with EscapeHub today.</p>
          <Link to="/bookings" className={styles.ctaButton}>
            Book Now
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className={styles.highlights}>
        <h2>Why Choose EscapeHub?</h2>
        <div className={styles.cards}>
          {highlights.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

