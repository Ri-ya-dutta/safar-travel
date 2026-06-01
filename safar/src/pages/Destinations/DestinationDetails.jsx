import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../../services/api";
import styles from "./DestinationDetails.module.css";

const DestinationDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const data = await getDestinationById(id);
        setDestination(data);
      } catch (err) {
        console.error("Failed to fetch details:", err);
      }
    };
    fetchDestination();
  }, [id]);

  if (!destination) return <p>Loading...</p>;

  return (
    <div className={styles.detailsContainer}>
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className={styles.image} />
      <p><strong>Category:</strong> {destination.category}</p>
      <p><strong>Subcategory:</strong> {destination.subcategory}</p>
      <p><strong>Description:</strong> {destination.description}</p>
      <p><strong>Price:</strong> ₹{destination.price}</p>
    </div>
  );
};

export default DestinationDetails;