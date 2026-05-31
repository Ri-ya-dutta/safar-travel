// // File: src/pages/Destinations/Destinations.jsx

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./Destinations.module.css"; // ensure this file exists

// const Destinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         let url = "http://localhost:5000/api/destinations";

//         if (selectedCategory && selectedSubcategory) {
//           url += `?category=${selectedCategory}&subcategory=${selectedSubcategory}`;
//         } else if (selectedCategory) {
//           url += `?category=${selectedCategory}`;
//         }

//         const response = await axios.get(url);
//         setDestinations(response.data);
//         console.log("Fetched Destinations:", response.data);
//       } catch (error) {
//         console.error("Error fetching destinations:", error);
//       }
//     };

//     fetchDestinations();
//   }, [selectedCategory, selectedSubcategory]);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(null); // reset subcategory when category changes
//   };

//   const handleSubcategorySelect = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//   };

//   return (
//     <div>
//       <h2>Choose Destination Category</h2>
//       <div className={styles.categoryContainer}>
//         <button onClick={() => handleCategorySelect("National")}>National</button>
//         <button onClick={() => handleCategorySelect("International")}>International</button>
//       </div>

//       {selectedCategory && (
//         <div className={styles.subcategoryContainer}>
//           <h3>{selectedCategory} Subcategories</h3>
//           {[
//             "Beaches",
//             "Mountains",
//             "Forests",
//             "Deserts",
//             "Cities",
//           ].map((sub) => (
//             <button
//               key={sub}
//               className={styles.subcategoryButton}
//               onClick={() => handleSubcategorySelect(sub)}
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       <div className={styles.destinationsGrid}>
//         {destinations.length > 0 ? (
//           destinations.map((destination) => (
//             <div key={destination._id} className={styles.destinationCard}>
//               <h4>{destination.name}</h4>
//               <p>{destination.description}</p>
//               {destination.images && destination.images.length > 0 && (
//                 <img
//                   src={destination.images[0]}
//                   alt={destination.name}
//                   className={styles.destinationImage}
//                 />
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No destinations found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Destinations;

// app2/pages/Destinations.jsx
//import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Destinations.module.css';

const Destinations = () => {
  const [region, setRegion] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const subcategories = {
    National: ['Beaches', 'Mountains', 'Forests', 'Deserts'],
    International: ['Beaches', 'Mountains', 'Islands', 'Cities'],
  };
  const [destinations, setDestinations] = useState([]);

useEffect(() => {
  const fetchDestinations = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/destinations');
      setDestinations(res.data);
    } catch (err) {
      console.error('Error fetching destinations:', err);
    }
  };

  fetchDestinations();
}, []);

  const sampleDestinations = [
  {
    _id: '1',
    name: 'Goa Beach',
    location: 'Goa, India',
    price: 12000,
    category: 'National',
    subcategory: 'Beaches',
    image: 'https://source.unsplash.com/300x200/?beach,goa',
  },
  {
    _id: '2',
    name: 'Swiss Alps',
    location: 'Switzerland',
    price: 85000,
    category: 'International',
    subcategory: 'Mountains',
    image: 'https://source.unsplash.com/300x200/?mountains,switzerland',
  },
  {
    _id: '3',
    name: 'Thar Desert',
    location: 'Rajasthan, India',
    price: 10000,
    category: 'National',
    subcategory: 'Deserts',
    image: 'https://source.unsplash.com/300x200/?desert,rajasthan',
  },
];

  return (
    <div className={styles.destinationsContainer}>
      <h2 className={styles.heading}>Explore Destinations</h2>

<div className={styles.centerButtons}>
  <button
    className={region === 'National' ? styles.active : ''}
    onClick={() => {
      setRegion('National');
      setSubcategory('');
    }}
  >
    National
  </button>
  <button
    className={region === 'International' ? styles.active : ''}
    onClick={() => {
      setRegion('International');
      setSubcategory('');
    }}
  >
    International
  </button>
</div>

{/* Only show subcategories *after* choosing region */}
{region && (
  <div className={styles.centerButtons}>
    {subcategories[region].map((sub, index) => (
      <button
        key={index}
        className={subcategory === sub ? styles.activeSub : ''}
        onClick={() => setSubcategory(sub)}
      >
        {sub}
      </button>
    ))}
  </div>
)}

      {/* Destination cards will be placed here */}
      
        {/* <div className={styles.cardsGrid}>
  {sampleDestinations
    .filter(dest => {
      if (!region) return true;
      if (dest.category !== region) return false;
      if (subcategory && dest.subcategory !== subcategory) return false;
      return true;
    })
    .map(dest => (
      <div key={dest._id} className={styles.card}>
        <img src={dest.image} alt={dest.name} />
        <div className={styles.cardInfo}>
          <h3>{dest.name}</h3>
          <p>{dest.location}</p>
          <p>₹{dest.price}</p>
          <span>{dest.subcategory}</span>
        </div>
      </div>
    ))} */}
    <div className={styles.cardsGrid}>
  {destinations
    .filter(dest => {
      if (!region) return true;
      if (dest.category !== region) return false;
      if (subcategory && dest.subcategory !== subcategory) return false;
      return true;
    })
    .map(dest => (
      <div key={dest._id} className={styles.card}>
        <img src={dest.image} alt={dest.name} />
        <div className={styles.cardInfo}>
          <h3>{dest.name}</h3>
          <p>{dest.location}</p>
          <p>₹{dest.price}</p>
          <span>{dest.subcategory}</span>
        </div>
      </div>
    ))}
</div>


        {/* We'll map destination cards here later */}
      </div>
  
  );
};

export default Destinations;
