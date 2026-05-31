// src/pages/Destinations/DestinationDetails.jsx
// import React from "react";

// const DestinationDetails = ({ destination }) => {
//   if (!destination) return <p>No destination selected.</p>;

//   return (
//     <div>
//       <h2>{destination.name}</h2>
//       <p>{destination.description}</p>
//       <img src={destination.imageUrl} alt={destination.name} />
//     </div>
//   );
// };

// export default DestinationDetails;
// DestinationDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./DestinationDetails.module.css"; // Adjust path if needed

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/destinations/${id}`)
      .then((res) => setDestination(res.data))
      .catch((err) => console.error("Failed to fetch details:", err));
  }, [id]);

  if (!destination) return <p>Loading...</p>;

  return (
    <div className={styles.detailsContainer}>
      <h2>{destination.name}</h2>
      <img src={destination.imageUrl} alt={destination.name} className={styles.image} />
      <p><strong>Category:</strong> {destination.category}</p>
      <p><strong>Subcategory:</strong> {destination.subcategory}</p>
      <p><strong>Description:</strong> {destination.description}</p>
      <p><strong>Price:</strong> ₹{destination.price}</p>
    </div>
  );
};

export default DestinationDetails;
