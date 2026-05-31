import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('adminToken');

      // 🔐 Redirect if token is missing
      if (!token) {
        navigate('/admin'); // or use: window.location.href = '/admin';
        return;
      }

      try {
        const bookingRes = await axios.get('http://localhost:5000/api/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const contactRes = await axios.get('http://localhost:5000/api/contact', {
          headers: { Authorization: `Bearer ${token}` }
        });

        const destinationRes = await axios.get('http://localhost:5000/api/destinations', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setBookings(bookingRes.data);
        setMessages(contactRes.data);
        setDestinations(destinationRes.data);

      } catch (err) {
        // 🔒 Handle 401 Unauthorized error
        if (err.response && err.response.status === 401) {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('adminToken');
          navigate('/admin'); // or use: window.location.href = '/admin';
        } else {
          console.error('Error fetching admin data:', err);
        }
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2>EscapeHub Admin</h2>
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Overview</Link></li>
            <li><Link to="/admin/dashboard/bookings">Bookings</Link></li>
            <li><Link to="/admin/dashboard/destinations">Destinations</Link></li>
            <li><Link to="/admin/dashboard/messages">Messages</Link></li>
          </ul>
        </nav>
      </aside>

      <main className={styles.main}>
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Admin! Select a tab to manage data.</p>

        <div className={styles.widgets}>
          <div className={styles.card}>Total Bookings: {bookings.length}</div>
          <div className={styles.card}>Destinations: {destinations.length}</div>
          <div className={styles.card}>Messages: {messages.length}</div>
        </div>
                {/* Booking List */}
        <section className={styles.dataSection}>
          <h2>Recent Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings found.</p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Destination</th>
                  <th>Date</th>
                  <th>People</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.destination}</td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td>{booking.people}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
