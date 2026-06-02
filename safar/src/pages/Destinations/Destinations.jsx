// import React, { useEffect, useState } from 'react';
// import { getDestinations } from '../../services/api';
// import styles from './Destinations.module.css';

// const Destinations = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [region, setRegion] = useState('');
//   const [subcategory, setSubcategory] = useState('');

//   const subcategories = {
//     National: ['Beaches', 'Mountains', 'Forests', 'Deserts'],
//     International: ['Beaches', 'Mountains', 'Islands', 'Cities'],
//   };

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const data = await getDestinations();
//         setDestinations(data);
//       } catch (err) {
//         console.error('Error fetching destinations:', err);
//       }
//     };
//     fetchDestinations();
//   }, []);

//   return (
//     <div className={styles.destinationsContainer}>
//       <h2 className={styles.heading}>Explore Destinations</h2>

//       <div className={styles.centerButtons}>
//         <button
//           className={region === 'National' ? styles.active : ''}
//           onClick={() => { setRegion('National'); setSubcategory(''); }}
//         >
//           National
//         </button>
//         <button
//           className={region === 'International' ? styles.active : ''}
//           onClick={() => { setRegion('International'); setSubcategory(''); }}
//         >
//           International
//         </button>
//       </div>

//       {region && (
//         <div className={styles.centerButtons}>
//           {subcategories[region].map((sub, index) => (
//             <button
//               key={index}
//               className={subcategory === sub ? styles.activeSub : ''}
//               onClick={() => setSubcategory(sub)}
//             >
//               {sub}
//             </button>
//           ))}
//         </div>
//       )}

//       <div className={styles.cardsGrid}>
//         {destinations
//           .filter(dest => {
//             if (!region) return true;
//             if (dest.category !== region) return false;
//             if (subcategory && dest.subcategory !== subcategory) return false;
//             return true;
//           })
//           .map(dest => (
//             <div key={dest._id} className={styles.card}>
//               <img src={dest.image} alt={dest.name} />
//               <div className={styles.cardInfo}>
//                 <h3>{dest.name}</h3>
//                 <p>{dest.location}</p>
//                 <p>₹{dest.price}</p>
//                 <span>{dest.subcategory}</span>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Destinations;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDestinations } from '../../services/api';
import styles from './Destinations.module.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [region, setRegion] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const subcategories = {
    National: ['Beaches', 'Mountains', 'Forests', 'Deserts'],
    International: ['Beaches', 'Mountains', 'Islands', 'Cities'],
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const data = await getDestinations();
        setDestinations(data);
      } catch (err) {
        console.error('Error fetching destinations:', err);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <div className={`container mt-5 pt-5 pb-5 ${styles.pageWrapper}`}>
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: '#1e272e' }}>Explore Destinations</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>Find your next great adventure.</p>
      </div>

      {/* Main Region Filters */}
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterBtn} ${region === '' ? styles.active : ''}`}
          onClick={() => { setRegion(''); setSubcategory(''); }}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${region === 'National' ? styles.active : ''}`}
          onClick={() => { setRegion('National'); setSubcategory(''); }}
        >
          National
        </button>
        <button
          className={`${styles.filterBtn} ${region === 'International' ? styles.active : ''}`}
          onClick={() => { setRegion('International'); setSubcategory(''); }}
        >
          International
        </button>
      </div>

      {/* Subcategory Filters (Only shows if a region is selected) */}
      {region && (
        <div className={`${styles.filterContainer} ${styles.subFilters}`}>
          {subcategories[region].map((sub, index) => (
            <button
              key={index}
              className={`${styles.subFilterBtn} ${subcategory === sub ? styles.activeSub : ''}`}
              onClick={() => setSubcategory(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* The Destination Grid */}
      <div className={styles.cardsGrid}>
        {destinations
          .filter(dest => {
            if (!region) return true;
            if (dest.category !== region) return false;
            if (subcategory && dest.subcategory !== subcategory) return false;
            return true;
          })
          .map(dest => (
            /* We use Link here so clicking the card opens DestinationDetails.jsx */
            <Link to={`/destinations/${dest._id}`} key={dest._id} className={styles.cardLink}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={dest.image} alt={dest.name} />
                  <span className={styles.badge}>{dest.subcategory}</span>
                </div>
                <div className={styles.cardInfo}>
                  <h3>{dest.name}</h3>
                  <p className={styles.location}>📍 {dest.location}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.price}>₹{dest.price}</span>
                    <span className={styles.viewBtn}>View Details →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Destinations;