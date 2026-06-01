import React, { useEffect, useState } from 'react';
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
    <div className={styles.destinationsContainer}>
      <h2 className={styles.heading}>Explore Destinations</h2>

      <div className={styles.centerButtons}>
        <button
          className={region === 'National' ? styles.active : ''}
          onClick={() => { setRegion('National'); setSubcategory(''); }}
        >
          National
        </button>
        <button
          className={region === 'International' ? styles.active : ''}
          onClick={() => { setRegion('International'); setSubcategory(''); }}
        >
          International
        </button>
      </div>

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
    </div>
  );
};

export default Destinations;