import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getAdminBookings, getAdminContacts, getDestinations } from '../../services/api';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchData = async () => {
      try {
        const [bookingData, contactData, destinationData] = await Promise.all([
          getAdminBookings(token),
          getAdminContacts(token),
          getDestinations(),
        ]);
        setBookings(bookingData);
        setMessages(contactData);
        setDestinations(destinationData);
      } catch (err) {
        console.error('Error fetching admin data:', err);
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2>Safar Admin</h2>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Bookings</li>
            <li>Destinations</li>
            <li>Messages</li>
          </ul>
        </nav>
        <button onClick={handleLogout}>Logout</button>
      </aside>

      <main className={styles.main}>
        <h1>Dashboard Overview</h1>
        <p>Welcome back, Admin!</p>

        <div className={styles.widgets}>
          <div className={styles.card}>Total Bookings: {bookings.length}</div>
          <div className={styles.card}>Destinations: {destinations.length}</div>
          <div className={styles.card}>Messages: {messages.length}</div>
        </div>

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
                  <th>Travellers</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.destination}</td>
                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                    <td>{booking.travellers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>

        <section className={styles.dataSection}>
          <h2>Contact Messages</h2>
          {messages.length === 0 ? (
            <p>No messages found.</p>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg._id}>
                    <td>{msg.fullName}</td>
                    <td>{msg.email}</td>
                    <td>{msg.message}</td>
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