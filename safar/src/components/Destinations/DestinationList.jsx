// DestinationList.jsx
// import React from 'react';
// import styles from './DestinationList.module.css';

// const mockDestinations = {
//   National: {
//     Beaches: ['Goa', 'Puri', 'Andaman'],
//     Mountains: ['Manali', 'Darjeeling', 'Ooty'],
//     Forests: ['Sundarbans', 'Jim Corbett'],
//     Deserts: ['Jaisalmer', 'Bikaner'],
//     Lakes: ['Udaipur', 'Nainital'],
//     Historical: ['Hampi', 'Agra'],
//     Adventure: ['Rishikesh', 'Leh']
//   },
//   International: {
//     Beaches: ['Bali', 'Phuket', 'Maldives'],
//     Mountains: ['Swiss Alps', 'Rockies'],
//     Forests: ['Amazon', 'Black Forest'],
//     Deserts: ['Sahara', 'Atacama'],
//     Lakes: ['Lake Bled', 'Lake Como'],
//     Historical: ['Rome', 'Athens'],
//     Adventure: ['Queenstown', 'Iceland']
//   }
// };

// const DestinationList = ({ category, subcategory }) => {
//   const destinations =
//     category && subcategory ? mockDestinations[category]?.[subcategory] : [];

//   return (
//     <div className={styles.destinationList}>
//       <h2 className={styles.listTitle}>Popular {subcategory} in {category}</h2>
//       <div className={styles.cardContainer}>
//         {destinations.map((place, index) => (
//           <div key={index} className={styles.card}>
//             <h3>{place}</h3>
//             <p>{category} - {subcategory}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationList;
// DestinationList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./DestinationList.module.css"; // Adjust path if needed

const DestinationList = ({ category, subcategory }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    if (!category || !subcategory) return;

    const fetchDestinations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/destinations", {
          params: { category, subcategory },
        });
        setDestinations(res.data);
      } catch (err) {
        console.error("Failed to fetch destinations:", err);
      }
    };

    fetchDestinations();
  }, [category, subcategory]);

  return (
    <div className={styles.grid}>
      {destinations.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        destinations.map((dest) => (
          <Link to={`/destinations/${dest._id}`} key={dest._id} className={styles.cardLink}>
            <div className={styles.card}>
              <img src={dest.imageUrl} alt={dest.name} className={styles.image} />
              <div className={styles.details}>
                <h4>{dest.name}</h4>
                <p>{dest.description?.slice(0, 60)}...</p>
                <strong>₹{dest.price}</strong>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default DestinationList;
