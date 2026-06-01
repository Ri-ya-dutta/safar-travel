const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Destinations
export const getDestinations = async () => {
  const res = await fetch(`${BASE_URL}/destinations`);
  return res.json();
};

export const getDestinationById = async (id) => {
  const res = await fetch(`${BASE_URL}/destinations/${id}`);
  return res.json();
};

// Bookings
export const createBooking = async (data) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Contact
export const createContact = async (data) => {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

// Admin
export const adminLogin = async (data) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getAdminBookings = async (token) => {
  const res = await fetch(`${BASE_URL}/bookings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const getAdminContacts = async (token) => {
  const res = await fetch(`${BASE_URL}/contact`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};